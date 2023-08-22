import express from 'express'
import process from 'process'
import dotenv from 'dotenv'
import router from "@/routes/routes"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import "@/models/db"
import { Express } from '@/types/types'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT_BACK

const app: Express = express()  

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(cookieParser()) 

app.use('/', router) 


app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`) 
})

module.exports = app