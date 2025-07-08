# 🎬 NetflixClone (React.js + Firebase + TMDB)

A Netflix UI clone built with **React.js**, **Firebase Authentication (via Firestore)**, and **TMDB API** for movie data.  
This project replicates the modern Netflix interface and includes key functionalities like user login, movie browsing, and dynamic content sections.

> 📌 This is a **portfolio project built for educational purposes** by following a YouTube [Tutorial](https://www.youtube.com/watch?v=lpx2zFkapIk&t=6001s&ab_channel=GreatStack) from [GreatStack](https://www.youtube.com/watch?v=lpx2zFkapIk). It has been customized for demonstration.

---

## 🧠 Features

- 🎨 Netflix-like UI with dynamic movie categories
- 🔐 Firebase Authentication (sign in / sign up with email)
- 🍿 Movie data fetched using **TMDB API**
- 📺 Sections: Blockbuster Movies, Top Rated, New & Popular, etc.
- 📱 Responsive design for mobile and desktop

---

## 🛠 Tech Stack

| Category         | Tech Used                     |
|------------------|-------------------------------|
| Frontend         | React.js, HTML, CSS, JSX      |
| Routing          | React Router DOM              |
| Authentication   | Firebase Auth (via Firestore) |
| API Integration  | TMDB (The Movie Database API) |
| State Management | useState, useEffect (React)   |
| Styling          | Custom CSS                    |

---

## 📦 APIs & Services Used

### 🔹 TMDB (The Movie Database)
- Provides movie data such as trending, top-rated, upcoming, etc.
- Requires an API key from https://www.themoviedb.org/

### 🔹 Firebase (Cloud Firestore)
- Manages user authentication via email/password
- Can also be extended to store user watchlists, preferences, etc.
- https://firebase.google.com/

---

## 🔧 Getting Started

1. Clone the repository

```
git clone https://github.com/X1nQing/NetflixClone---Self-Learn.git
cd NetflixClone---Self-Learn
```

2. Install the Dependencies

```
npm install
npm install react-router-dom
npm install firebase react-firebase-hooks
npm install react-toastify
```

3. Create a .env file in the root directory

```
touch .env
```

4.  Add the following information based on your credentials:

```
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

VITE_TMDB_TOKEN=your_tmdb_bearer_token
```

5. Run the Project

```
npm run dev
```
---
## 📄 Disclaimer

⚠️ This project is built as part of the GreatStack React.js tutorial on YouTube:

[Watch Here](https://www.youtube.com/watch?v=lpx2zFkapIk&t=6001s&ab_channel=GreatStack)

All credit for the original UI and logic goes to the content creator.

This repository is for learning and portfolio presentation only and not meant for commercial or full production use.

---
## 👨‍💻 Author

@2025 X1nQing|Steve

---

## 📜 License

This project does not use any license due to its tutorial-based origin.
Do not redistribute or relicense without verifying with the original content creator.
