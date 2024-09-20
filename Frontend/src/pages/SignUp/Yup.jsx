import * as yup from "yup"
const passwordregex = /^(?!.\s)(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneNumberRegex = /^[0-9]{10}$/;
const email=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
export const SignUp_Yup=yup.object({
    email:yup.string().matches(email,"Invalid Email Format").required("Email is Required"),
    phonenumber:yup.string().matches(phoneNumberRegex,"Phone Number Must be 10 Digits").required("Phone Number is Required"),
    password:yup.string().min(8).matches(passwordregex,"Password Format is Invalid").required("Password is Required"),
    ReTypePassword:yup.string().oneOf([yup.ref("password")],"Password is not matched").required("ReType PassWord is Required"),
    location: yup.string().notOneOf(["Location"], "Please select a valid location").required("Required"),
})