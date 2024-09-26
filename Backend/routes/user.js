import express from "express"
import bodyParser from "body-parser"
import UserController from "../controllers/user.js"
import verify from "../utils/validate.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import dotenv from "dotenv"
import sendMail from "../utils/mail.js"
dotenv.config()

const app = express.Router()
app.use(bodyParser.urlencoded({ extended: false }))

const SALT = '$2b$12$IFMhCvLBD/p1SGMAPvFBre'
const userCtrl = UserController()

app.route('/login')
    .post(async (req, res) => {
        const { usermail, password } = req.body
        const hash = await bcrypt.hash(password + usermail, SALT)
        const data = await userCtrl.authenticate({ usermail, password: hash })
        if (data.status == 404) {
            return res.status(200).json({ error: 'Usermail or password incorrect' })
        }
        console.log(data.result)
        const tokenData = {
            _id: data.result._id,
            username: data.result.username,
            usermail: data.result.usermail,
            password: data.result.password
        }
        let token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "7d",
        })
        return res.status(200).json({ jwt: token, ...data.result._doc, password: null })
    })

app.route('/register')
    .post(async (req, res) => {
        const { username, usermail, password, cpassword } = req.body
        if (cpassword != password) {
            return res.status(200).json({ error: 'Password does\'t match!' })
        }
        if (password.length < 8) {
            return res.status(200).json({ error: 'Password too short!' })
        }
        const hash = await bcrypt.hash(password + usermail, SALT)
        const data = await userCtrl.createUser({ username, usermail, password: hash })
        if (data.status == 400) {
            return res.status(200).json({ error: data.result })
        }
        return res.status(200).json({ ...data.result._doc, password: null })
    })

app.route('/profile')
    .post(async (req, res) => {
        const user = verify(req.headers)
        if (!user) {
            return res.status(200).json({ error: "not authorized" })
        }
        const data = await userCtrl.authenticate({ usermail: user.usermail, password: user.password })
        return res.status(200).json({ ...data.result?._doc, password: null })
    })

app.route('/find')
    .post(async (req, res) => {
        const user = verify(req.headers)
        if (!user) {
            return res.status(200).json({ error: "not authorized" })
        }
        const { query } = req.body
        const data = await userCtrl.find({ query })
        return res.status(200).json(data)
    })

app.route('/add-friend')
    .post(async (req, res) => {
        const user = verify(req.headers)
        if (!user) {
            return res.status(200).json({ error: "not authorized" })
        }
        const { username_1, username_2 } = req.body
        const data = await userCtrl.addFriend({ username_1, username_2 })
        return res.status(200).json(data)
    })

app.route('/otp')
    .post(async (req, res) => {
        const { userMail, OTP } = req.body
        const body = `your OTP is : ${OTP}`
        const subject = "OTP"
        sendMail({
            receiverMail: userMail,
            mailSubject: subject,
            mailBody: body,
        }, (data) => {
            console.log(data)
            res.status(200).json({ data })
        })

    })


const user = app
export default user
