const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');

const workoutRoutes = require('./routes/workout');
const userRoutes = require('./routes/user');

// Load environment variables from .env file
dotenv.config();

// Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Cached MongoDB connection (needed on Vercel serverless)
const cached = global._mongoose || (global._mongoose = { conn: null, promise: null });

async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGO_URI, { bufferCommands: false });
    }
    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null; // allow retry on the next request
        throw error;
    }
    return cached.conn;
}

// Connect to the DB before handling any request
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.log('MongoDB connection error:', error.message);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);

// Run a normal server locally; on Vercel the exported app is used instead
const PORT = process.env.PORT || 5001;
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running at: http://localhost:${PORT}`);
    });
}

module.exports = app;