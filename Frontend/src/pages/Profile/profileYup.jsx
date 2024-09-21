import * as yup from "yup"
const phoneNumberregex=/^\d{10}$/;
const passwordregex=/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/

export const Profile_yup=yup.object({
    firstName:yup.string().required("FirstName is Required"),
    lastName:yup.string().required("LastName is required"),
    email:yup.string().required("Email is required"),
    address:yup.string().required("Address is Required"),
    phoneNumber:yup.string().matches(phoneNumberregex,"Invalid").required("Phone Number is Required"),
    // password:yup.string().min(8).matches(passwordregex,"Invaild Password").required("Password is Required"),
})