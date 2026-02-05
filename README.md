# 📚 ELibrary App

A modern, accessible digital library built with **Node.js, Express, MongoDB, and React**.  
The app allows users to **search, upload, and browse books** with a clean UI and secure backend, plus an **Admin Panel** for managing content.

👉 Live Demo: [Library App on Vercel](https://library-app-58a9.vercel.app/)

---

## 🚀 Features
- 🔍 **Search & Browse** books by title, author, language, or category  
- 📑 **Bookmark Favorites** and track reading progress  
- 📤 **Upload Books** with cover images and PDFs  
- 📱 **Responsive Design** (mobile‑friendly)  
- 🛠️ **Admin Dashboard** for managing books and users  
- 🔒 **Secure Backend** with pinned dependencies and audit fixes  

---

## 🛠️ Tech Stack
- **Frontend (User):** React, TailwindCSS, React Router  
- **Frontend (Admin):** React, TailwindCSS, Axios, React Router  
- **Backend:** Node.js, Express, MongoDB  
- **Deployment:** Vercel (frontend), Node server (backend)  
- **Tools:** Multer (secure version), npm audit for vulnerability fixes  

---

## 📸 Screenshots

### User App
- **Home Page**  
  ![Home Page](docs/screenshots/Home.png)
  ![Home Page](docs/screenshots/Home1.png)


- **Search Page**  
  ![Search Page](docs/screenshots/Search.png)
  ![Search Page](docs/screenshots/Search1.png)


- **Upload Page**  
  ![Upload Page](docs/screenshots/Upload.png)
  ![Upload Page](docs/screenshots/Upload1.png)

- **About Page**  
  ![About Page](docs/screenshots/About1.png)
  ![About Page](docs/screenshots/About2.png)


### Admin App
- **Admin Dashboard**  
- **Book Management**  
  ![Admin Dashboard](docs/screenshots/Admin.jpg)


---

## ⚙️ Installation & Setup

Clone the repo:
```bash
git clone https://github.com/your-username/library-app.git
cd ELibrary-app
```

Install dependencies:
```bash
npm install
```

---

### 🔹 Running only the User app
```bash
npm run start-user
```
Launches the user frontend only (without backend).

### 🔹 Running only the Admin app
```bash
npm run start-admin
```
Launches the admin frontend only (without backend).

### 🔹 Running User + Backend (with DB)
```bash
npm start
```
Starts backend + user frontend together.

### 🔹 Running Admin + Backend (with DB)
```bash
npm run admin
```
Starts backend + admin frontend together.

### 🔹 Running All (User + Admin + Backend)
Add this script to `package.json`:
```json
"start-all": "concurrently \"npm run start-backend\" \"npm run start-user\" \"npm run start-admin\""
```
Then run:
```bash
npm run start-all
```

---

## 📂 Project Structure
```
ELibrary-app/
  backend/        # Node.js + Express API
  user/           # React frontend (user-facing)
  admin/          # React frontend (admin dashboard)
```

---

## 👩‍💻 Developer
**Darshini M S**  
Aspiring AI Full Stack Engineer & Computer Science student.  
Focused on building **AI / ML Applications and Full Stack Web development**.

---

---

## 👩‍💻 Contributor
**Deepak M**  
CSE student building intelligent software solution.  
Focused on building **Developing AI-powered software and crafting innovative AI software**.

---

## 📜 License
© 2025 Library App. All rights reserved.  
This project is for educational purposes.

---



