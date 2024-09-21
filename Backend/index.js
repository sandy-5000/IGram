import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import user from "./routes/user.js"

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || 'localhost'
const MONGO_URL = process.env.MONGO_URL

app.get('/api', (req, res) => {
	res.json({
		message: 'Server [FaceGram]'
	})
})

app.use('/api/user', user)

mongoose
	.connect(MONGO_URL)
	.then(() => {
		console.log("DB Connected")
		app.listen(PORT, () => console.log(`URL: http://${HOST}:${PORT}/api`))
	})
	.catch(() => console.log('DB NOT connected', e))
