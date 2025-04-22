import express from 'express'
import dotenv from 'dotenv'
import usersRoutes from './routes/users.routes'
import client from 'prom-client'

// Cria um registro padrão
const collectDefaultMetrics = client.collectDefaultMetrics
collectDefaultMetrics()

dotenv.config()

const app = express()
app.use(express.json())

// Expor as métricas na rota /metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType)
  res.end(await client.register.metrics())
})

app.use('/users', usersRoutes)

const PORT = process.env.PORT || 5003
app.listen(PORT, () => {
  console.log(`Users service running on port ${PORT}`)
})
