# 🎬 Movie Reservation System - Backend

This project is a **Movie Reservation System**, designed to replicate core features of an online movie ticket booking platform. It enables users to register, view movies and show schedules, select seats, and book/cancel tickets. Admins can manage movies, theaters, seats, and schedules. The project is structured using RESTful principles with role-based access and secure authentication.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)

---

## 🚀 Features

- User authentication with JWT
- Admin authorization for management routes
- Movie and theater management
- Seat assignment to theaters
- Schedule creation for movies in theaters
- Ticket booking with seat and schedule selection
- Ticket cancellation
- View all booked tickets by the user

---

## 🛠️ Tech Stack

| Technology   | Description                         |
|--------------|-------------------------------------|
| Node.js      | JavaScript runtime                  |
| Express.js   | Web framework                       |
| PostgreSQL   | Relational database                 |
| Sequelize    | ORM (Object Relational Mapper)      |
| JWT          | JSON Web Tokens for authentication  |
| Bcrypt       | Password hashing                    |

---

## 🧱 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/musaddiq-ashfaq/movie-reservation.git

cd movie-reservation
```
### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```
PORT=5000
JWT_SECRET=your_jwt_secret
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```
### 4. Run migrations and start server
```
npx sequelize db:migrate
npm start
```
### 5. Start the server
```bash
npm run dev
```