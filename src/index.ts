import express from 'express'
import dotenv from 'dotenv'
import usersRoutes from './routes/users.routes'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/users', usersRoutes)

const PORT = process.env.PORT || 5003
app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`)
})
