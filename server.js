import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.connection.js'
import taskRoutes from './routes/task.routes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/tasks', taskRoutes)

// Start
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })
})