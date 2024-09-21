import * as yup from "yup"

// const passwordregex = /^(?!.\s)(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/
const passwordregex = /^.{8,}$/
const userNameRegex = /^[a-zA-Z0-9._]{5,24}$/
const usermail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const Yup = yup.object({
    email: yup.string()
        .matches(usermail, "Invalid Email Format")
        .required("Email is Required"),
    username: yup.string()
        .matches(userNameRegex, "username should only contains alphanumeric, _ and .")
        .required("Username is Required"),
    password: yup.string().min(8)
        .matches(passwordregex, "Password Format is Invalid")
        .required("Password is Required"),
    ReTypePassword: yup.string()
        .oneOf([yup.ref("password")], "Password is not matched")
        .required("ReType PassWord is Required"),
})
