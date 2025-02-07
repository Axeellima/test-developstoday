import express from "express"
import cors from "cors"
import "reflect-metadata"
import dotenv from "dotenv"
import countriesRouter from "./routes/country.routes"

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api", countriesRouter)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
