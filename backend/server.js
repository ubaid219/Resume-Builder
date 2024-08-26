import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from './routes/user.routes.js'
import connectToMongo from "./db/dbConnection.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js"

dotenv.config()

const app = express()

app.use(cors({origin:"http://localhost:5173",credentials: true}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())






app.use("/api/v1/users", userRouter)

app.use(errorHandler);






connectToMongo()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})

