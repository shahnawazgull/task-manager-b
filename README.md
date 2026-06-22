# Task Manager — Backend

A REST API for managing tasks, built with Express and MongoDB. Includes a bonus weather lookup feature powered by the OpenWeatherMap API.

## Live API

https://task-manager-b-uaf0.onrender.com

## Tech Stack

- Node.js
- Express 5
- MongoDB + Mongoose
- express-validator
- CORS
- dotenv

## Features

- Create, read, update, and delete tasks
- Toggle a task between completed and active
- Fetch live weather data for any city (OpenWeatherMap integration)

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/shahnawazgull/task-manager-b
cd task-manager-b
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
OPENWEATHER_API_KEY=your_openweather_api_key
```

- `MONGO_URI` — your MongoDB Atlas connection string
- `PORT` — port the server runs on locally (Render sets this automatically in production)
- `OPENWEATHER_API_KEY` — get a free key at [openweathermap.org](https://openweathermap.org/api)

### 4. Run the server

```bash
npm run dev    # development, with auto-restart
npm start      # production
```

The server will run on `http://localhost:3000` (or your configured `PORT`).

## API Endpoints

### Tasks

### API Endpoints

* **GET** `/api/tasks` → Get all tasks
* **POST** `/api/tasks` → Create a new task
* **PUT** `/api/tasks/:id` → Update an existing task
* **PATCH** `/api/tasks/:id/toggle` → Mark a task as completed or incomplete
* **DELETE** `/api/tasks/:id` → Delete a task by ID


### Weather

* **GET** `/api/weather?city=CityName` → Get current weather for a city.

## Deployment

Deployed on [Render](https://render.com).

- **Build Command:** `npm install`
- **Start Command:** `npm start`