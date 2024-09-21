import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import MainLayout from "/src/layouts/MainLayout"

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
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm password is required'),
    profilePic: Yup.mixed().required('Profile picture is required'),
  });

  return (
    <MainLayout>
      <div className="min-h-screen py-5 flex items-center justify-center bg-salt-800 dark:text-sky-500">
        <div className="bg-slate-300 dark:bg-slate-700 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Profile Page</h2>

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
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
                  <label className="block text-gray-700 font-semibold mb-2 dark:text-sky-500">First Name</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="w-full dark:bg-slate-800 dark:text-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block  text-gray-700 font-semibold mb-2 dark:text-sky-500">Last Name</label>
                  <Field
                    name="lastName"
                    type="text"
                    className="w-full dark:bg-slate-800 dark:text-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2 dark:text-sky-500">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full dark:bg-slate-800 dark:text-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2 dark:text-sky-500">Change Password</label>
                  <Field
                    name="password"
                    type="password"
                    className="w-full dark:bg-slate-800 dark:text-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2 dark:text-sky-500
                ">Confirm Password</label>
                  <Field
                    name="confirmPassword"
                    type="password"
                    className="w-full dark:bg-slate-800 dark:text-slate-200 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                </div>

                <button
                  type="submit"
                  className="w-full mt-5 dark:text-slate-800 bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Save Changes
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProfilePage;