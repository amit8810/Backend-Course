// require("dotenv").config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/database.js"
import {app} from './app.js'
dotenv.config({
    path: './env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})



























/*
import express from 'express'
const app = express()
const PORT = process.env.PORT || 4000;

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`,)
        app.on("error", (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/