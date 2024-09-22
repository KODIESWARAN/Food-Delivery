import express, { Router } from "express"
import cors from "cors"
import { connectDB } from "./Config/db.js"
import Routes from './routes/foodRoutes.js'

// config 
const app = express()
const port =  3000


// Middleware 
app.use(express.json())
app.use(cors())


// DB connect 

connectDB()


// api 
 app.use("/api/", Routes)
app.use("/images",express.static('uploads'))




app.get('/' , (req, res) => {
    res.send("API Working")
})


app.listen(port, () => {

    console.log(`port is listening ${port}`)
})


