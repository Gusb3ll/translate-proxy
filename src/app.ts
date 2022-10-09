import cors from 'cors'
import compression from 'compression'
import express, { Application, Request, Response } from 'express'

import AppRouter from './api/v1/router'

const app: Application = express()

app.use(compression())
app.use(express.json())
app.use(cors({ origin: '*' }))

app.get('/', (_req: Request, res: Response) => {
  res.status(301).redirect('https://www.youtube.com/watch?v=7gWBWCAj9oM')
})

app.use('/api/v1/translate', AppRouter)

export default app