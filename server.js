import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.connection.js'
import taskRoutes from './routes/task.routes.js'
import weatherRoutes from './routes/weather.routes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/tasks', taskRoutes)
app.use('/api/weather', weatherRoutes)

// Start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})