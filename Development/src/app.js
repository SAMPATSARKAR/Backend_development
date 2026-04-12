import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit: "16kb"}))// to support JSON payloads in the request body. This allows the server to parse incoming requests with JSON payloads, which is common in APIs and modern web applications.
app.use(express.urlencoded({extended: true, // to support nested objects in the request body. This allows the server to parse incoming requests with URL-encoded payloads, which is common in form submissions.
    limit:"16kb"
}))
app.use(express.static("public"))//access file from public

app.use(cookieParser())

export default app