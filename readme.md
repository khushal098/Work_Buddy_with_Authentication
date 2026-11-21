# MERN Stack Overview

* **M:** MongoDB (Database)
* **E:** ExpressJS (Backend)
* **R:** ReactJS (Frontend)[cite: 1]
* **N:** NodeJS (Backend)[cite: 1]

---

## Architecture Breakdown

| Layer | Role | Technology |
| :--- | :--- | :--- |
| **Frontend** | Browser / Client Side[cite: 1] | React App[cite: 1] |
| **Backend** | Server Side[cite: 1] | ExpressJS + NodeJS[cite: 1] |
| **Database** | Data Storage[cite: 1] | MongoDB[cite: 1] |

---

## Backend Setup Commands

Initialize a new Node.js project with default settings[cite: 1]:

## npm init -y

## npm install express / npm i express
# npm i -g nodemon

# npm i dotenv

## Run: npm run dev

## API Endpoints:
GET     /workouts        --> Get all the Workout docs
POST    /workouts        --> Create a new workout doc
GET     /workouts/:id    --> Get a single workout doc
DELETE  /workouts/:id    --> Deletes a single workout doc
PATCH   /workouts/:id    --> Updates a single workout

##### Frontend : 
npx create-react-app frontend





#### how to run 
git clone <this-repo-url>
cd "mern stack"

cd backend
# Workout Buddy (MERN Stack)


1. **Start the Backend:**

   cd backend
   npm install
   # Add PORT=5001 and MONGO_URI=your_mongodb_uri to backend/.env
   npm run dev


2. **Start the Frontend    

cd frontend
npm install
npm start





