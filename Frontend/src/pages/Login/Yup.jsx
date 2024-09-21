import * as yup from "yup"

// const passwordregex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/
const passwordregex = /^.{8,}$/
const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const Yup = yup.object({
    email: yup.string()
        .matches(emailregex, "Invalid Email")
        .required("Email is Required"),
    password: yup.string()
        .min(8)
        .matches(passwordregex, "Invaild Password")
        .required("Password is Required"),
})
