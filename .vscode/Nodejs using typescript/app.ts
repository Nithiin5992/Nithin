import express from 'express'

const app=express()

import todoRoutes from './routes/todo';

app.use(todoRoutes)

app.listen(3000)