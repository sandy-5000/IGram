// import React, { useState } from "react";
// import { useFormik } from "formik";
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { Profile_yup } from "./profileYup";

// // const ProfileData = ;
// const Profile = () => {
//   const [passWordVisible, setpassWordVisible] = useState(false);
// //   const [userID, setUserID] = useState("");
//   const [firstname, setFirstName] = useState("");
//   const [Lastname, setLastName] = useState("");
//   const [Phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
// //   const [pass, setPass] = useState("");
//   const [password, setPassword] = useState("****");

//   const {
//     values,
//     handleBlur,
//     handleChange,
//     handleSubmit,
//     errors,
//     touched,
//     // setFieldValue,
//   } = useFormik({
//     initialValues: {
//       firstName: "",
//       lastName: "",
//       password: "***",
//       email: "",
//       phoneNumber: "",
//       address: "",
//     },
//     validationSchema: Profile_yup,
//     onSubmit: async (values) => {
//       console.log(values);
//     },
//   });
//   const handleVisible = () => {
//     setpassWordVisible((prev) => !prev);
//   };

//   return (
//     <>
//       <div className="flex flex-col h-screen w-full">
//         <div className="flex-grow">
//           <div className="">
//             <div>
//               <div className="flex justify-start flex-col mx-auto">
//                 <div className="flex flex-row justify-start ml-36 gap-x-32 mt-[5%]  sm:flex-col sm:ml-5 sm:gap-y-4 md:flex-col md:gap-y-4 mdl:flex-col mdl:gap-y-4 dark:text-[#2563eb]">
//                   <div className="flex justify-start flex-col">
//                     <div className="font-bold text-[1.2rem] ml-1">
//                       Presonal Information
//                     </div>
//                     <div className="flex flex-row gap-x-5 xs:flex-col xs:gap-y-4">
//                       <div className=" rounded  flex flex-col gap-y-1">
//                         <input
//                           type="text"
//                           placeholder="FirstName"
//                           className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-[45px]  ${errors.email && touched.email
//                             ? "border-blue-400 border-2"
//                             : "border-gray-200 border-2"
//                             }`}
//                           name="firstName"
//                           value={firstname}
//                           onChange={(e) => setFirstName(e.target.value)}
//                           // onBlur={handleBlur}
//                         />
//                       </div>

//                       <div className="rounded  flex flex-col gap-y-1 ">
//                         <input
//                           type="text"
//                           placeholder="LastName"
//                           className={`w-full dark:bg-slate-700 dark:text-slate-200 pl-2 rounded h-[45px]  ${errors.email && touched.email
//                             ? "border-blue-400 border-2"
//                             : "border-gray-200 border-2"
//                             }`}
//                           name="lastName"
//                           value={Lastname}
//                           onChange={(e) => setLastName(e.target.value)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex justify-start flex-col ">
//                     <p className="font-bold text-[1.2rem] ml-1">
//                       Change Password
//                     </p>
//                     <div className="relative ">
//                       <input
//                         name="password"
//                         type="text"
//                         className={`w-[240px] sm:w-11/12 rounded h-[2.5rem] md:w-6/12 lg:w-4/12  pl-2 border-gray-200 border-2`}
//                         placeholder="Password "
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         // onBlur={handleBlur}
//                       />
//                       <div className="absolute right-0 top-1 mt-2 mr-2  sm:right-10 md:left-52 mdl:left-52 cursor-pointer">
//                         {passWordVisible ? (
//                           <FaRegEye onClick={handleVisible} />
//                         ) : (
//                           <FaRegEyeSlash onClick={handleVisible} />
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex justify-start flex-col  mt-4  lg:ml-36 dark:text-[#2563eb]">
//                   <p className="font-bold text-[1.2rem] ml-1">Phone Number</p>
//                   <input
//                     type="text"
//                     className={` w-[245px] rounded h-[2.5rem] sm:w-11/12 md:w-6/12 lg:w-4/12  pl-2 ${
//                       errors.phoneNumber && touched.phoneNumber
//                         ? "border-red-400 border-2"
//                         : "border-gray-200 border-2"
//                     }`}
//                     placeholder="Phone  "
//                     name="phoneNumber"
//                     value={Phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                   />
//                   {errors.phoneNumber && touched.phoneNumber ? (
//                     <small className="text-red-500 ">
//                       {errors.phoneNumber}
//                     </small>
//                   ) : null}
//                 </div>
//                 <div className="flex justify-start flex-col ml-36 mt-4 sm:ml-5 md:ml-36 mdl:ml-36 lg:ml-36 dark:text-[#2563eb]">
//                   <p className="font-bold text-[1.2rem] ml-1">Email</p>
//                   <input
//                     type="text"
//                     className={` w-[275px] rounded h-[2.5rem] sm:w-11/12 md:w-6/12 lg:w-4/12 pl-2 border-gray-200 border-2`}
//                     placeholder="Email  "
//                     name="email"
//                     value={values.email}
//                     onChange={handleChange}
//                     onBlur={handleBlur}
//                     readOnly
//                   />
//                 </div>
//                 <div className="flex justify-start flex-col ml-36  mt-4 sm:ml-5 md:ml-36 mdl:ml-36 lg:ml-36 dark:text-[#2563eb]">
//                   <p className="font-bold text-[1.2rem] ml-1">Address</p>
//                   <input
//                     type="text"
//                     className={` w-[350px] sm:w-11/12  rounded h-[2.5rem] md:w-6/12 lg:w-4/12  pl-2 border-gray-200 border-2`}
//                     placeholder="Address"
//                     name="address"
//                     value={address}
//                     onChange={(e) => setAddress(e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div className="flex justify-center mb-10">
//                 <button
//                   className="bg-[#512C19] text-white p-2 rounded w-[220px] mt-10"
//                   onClick={handleSubmit}
//                   type="submit"
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Profile;

// import React, { useState } from 'react';

// function ProfilePage() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phoneNumber: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [profilePic, setProfilePic] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     if (formData.password !== formData.confirmPassword) {
//       alert('Passwords do not match!');
//       return;
//     }
//     console.log(formData, profilePic);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slat-800 dark:text-[#2563eb]">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md ">
//         <h2 className="text-2xl font-bold mb-6 text-center">Profile Page</h2>

//         <div className="flex flex-col items-center mb-6">
//           {profilePic ? (
//             <img
//               src={profilePic}
//               alt="Profile"
//               className="w-24 h-24 rounded-full object-cover mb-4"
//             />
//           ) : (
//             <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
//               <span className="text-gray-500">No Image</span>
//             </div>
//           )}

//           <label className="block">
//             <span className="sr-only">Choose profile picture</span>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageUpload}
//               className="block w-full text-sm text-gray-500
//                         file:mr-4 file:py-2 file:px-4
//                         file:rounded-full file:border-0
//                         file:text-sm file:font-semibold
//                         file:bg-blue-50 file:text-blue-700
//                         hover:file:bg-blue-100"
//             />
//           </label>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 ">
//             <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]" >Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Email Address</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Phone Number</label>
//             <input
//               type="tel"
//               name="phoneNumber"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Change Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700 font-bold mb-2 " >Confirm Password</label>
//             <input
//               type="password"
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
//           >
//             Save Changes
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function ProfilePage() {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
        setFieldValue('profilePic', file);
      };
      reader.readAsDataURL(file);
    }
  };

  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must be digits')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Phone number is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    profilePic: Yup.mixed().required('Profile picture is required'),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-salt-800 dark:text-[#2563eb]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile Page</h2>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            profilePic: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="flex flex-col items-center mb-6 ">
                {profilePic ? (
                  <img
                    src={profilePic}
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}

                <label className="block">
                  <span className="sr-only">Choose profile picture</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, setFieldValue)}
                    className="block w-full text-sm text-gray-500
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-blue-50 file:text-blue-700
                              hover:file:bg-blue-100"
                  />
                  <ErrorMessage name="profilePic" component="div" className="text-red-500 text-sm mt-1" />
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">First Name</label>
                <Field
                  name="firstName"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Last Name</label>
                <Field
                  name="lastName"
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Email Address</label>
                <Field
                  name="email"
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Phone Number</label>
                <Field
                  name="phoneNumber"
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Change Password</label>
                <Field
                  name="password"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2 dark:text-[#2563eb]">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                />
                <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Save Changes
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ProfilePage;

