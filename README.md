# 🏆 Ranking Leaderboard App

A full-stack web application to track and rank users based on total points. Users can be created, awarded random points, and their rankings are dynamically updated in a clean, responsive UI.

---

## 🚀 Features

* 📈 Real-time leaderboard based on total points
* 🎲 Random point allocation on “Claim” button click
* 🧑 User creation form with name and avatar
* 🗂️ Backend history tracking of claimed points
* 🔄 Fully responsive design (mobile + desktop)
* 🍞 Toast notifications for success/error actions
* ⏳ Visual loading indicators for async events

---

## 🖼️ Demo

**🌐 Live App:**
👉 [https://leaderboardtaskkamal.netlify.app](https://leaderboardtaskkamal.netlify.app)

---

## ⚙️ Tech Stack

### 🧩 Frontend

* React (with Vite)
* Tailwind CSS
* React Toastify
* DiceBear Avatars API

### ⚙️ Backend

* Node.js + Express.js
* MongoDB + Mongoose
* RESTful API architecture

---

## 📦 Project Structure

```
leaderboardTask/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   └── pages/
│   └── App.jsx
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   └── index.js
```

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/kamalnayantripathi/LeaderboardTask.git
cd LeaderboardTask
```

---

### 2. Backend Setup

```bash
cd backend
npm install
npm run dev
```

🧪 Create a `.env` file inside `/backend` and add:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/your-db-name
CORS_ORIGIN=http://localhost:5173
```

> 🔐 If you're using a remote MongoDB like Atlas, replace `MONGODB_URI` with your full connection string.
> Need credentials? Email: `tripathikamalnayan3@gmail.com`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

🧪 Create a `.env` file inside `/frontend` and add:

```env
VITE_BACKEND_URL=http://localhost:8000
```

---

## 🧪 Sample Flow

1. 🎉 Add a user from the form (name required)
2. 🧮 Click “Claim” to randomly award points
3. 🥇 Watch leaderboard update and reorder in real-time
4. 📚 Points awarded are stored in history collection (MongoDB)

---

## 🙋 Support

For issues or suggestions, feel free to [open an issue](https://github.com/kamalnayantripathi/LeaderboardTask/issues)
or reach out at 📩 `tripathikamalnayan3@gmail.com`

---
