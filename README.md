# 🏆 Ranking Leaderboard App

A full-stack web application to track and rank users based on total points. Users can be created, awarded random points, and their rankings are dynamically updated in a responsive UI.

---

## 🚀 Features

- 📈 Realtime leaderboard based on total points
- 🎲 Random points awarded on "Claim" action
- 🧑 User creation form with name & avatar
- 🗂️ History of claimed points stored in the backend
- 🔄 Fully responsive design for mobile and desktop
- 🍞 Toast notifications for actions
- ⏳ Loading indicators for async operations

---

## 🖼️ Demo

> (Add your deployed link here after hosting)

---

## ⚙️ Tech Stack

### Frontend
- React + Vite
- Tailwind CSS
- Toastify for notifications
- DiceBear Avatars for user profile pictures

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- RESTful API architecture

---

## 📦 Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/git@github.com:kamalnayantripathi/LeaderboardTask.git
cd leaderboardTask

## FRONTEND SETUP
cd frontend
npm install
npm run dev
Configure environment variable in .env: VITE_BACKEND_URL=http://localhost:8000

##BACKEND SETUP
cd backend
npm install
npm run dev
PORT=8000
MONGODB_URI=mongodb://localhost:27017/--- > for password mail me at --> tripathikamalnayan3@gmail.com
CORS_ORIGIN=http://localhost:5173

frontend/
│
├── src/
│   ├── components/
|   |---pages/
│   └── App.jsx
│
backend/
├── models/
├── controllers/
├── routes/
└── index.js


