import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/router.js'
import Note from './model/noteModel.js'
import './config/db.js'

const app = express()

app.use(bodyparser.json({  extended: true }))
app.use(bodyparser.urlencoded({extended: true}))
app.use(cors())

app.use('/notes', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is running under port ${PORT}`)
})