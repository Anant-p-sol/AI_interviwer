import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import authRouter from "./routes/auth.route.js"
dotenv.config()

const app = express()

app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth" , authRouter)


const port = process.env.PORT || 6000



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
  connectDB()
})