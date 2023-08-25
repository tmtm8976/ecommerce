import React, { useContext, useState } from 'react'
import { login } from '../../services/authentication.service';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { gState } from '../../context/Context';


export default function Login() {
    const navigate = useNavigate()
    const {setData } = useContext(gState)
    const [userData, setUserData] = useState(null)

    const loginForm = useFormik({
        initialValues: {
          username: "kminchelle",
          password: "0lelplR",
        },
        onSubmit: async (formValues) => {
          const data = await login(formValues)
          setData((prevState)=>{
            return {
              ...prevState,
              isLoggedIn: true,
              userData: data
            }
          })
          navigate('/')
        },
        validationSchema: Yup.object().shape({
          username: Yup.string()
            .required("username is required"),
          password: Yup.string()
            .required("Password is Required")
            .min(5, "minimum is 5 chars"),
        }),
      });

  return (
    <div className="p-5 flex flex-col items-center">
      <h2 className="font-bold text-xl pb-10 text-white">Login Form</h2>
      <h5 className="text-zinc-400 font-bold p-5">W e l c o m e <span className='pl-3'> B a c k</span></h5>
      <form
        onSubmit={loginForm.handleSubmit}
        className="bg-zinc-200 p-10 rounded-2xl w-[min(100%,600px)] flex flex-col justify-between h-[min(50vh,350px)] text-center shadow-lg"
      >
        <div>
          <label htmlFor="username" className='p-5 font-bold text-zinc-700'>Username</label>
          <input
            value={loginForm.values.username}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            name="username"
            type="text"
            id="username"
            className="p-2 px-5 rounded-2xl w-full my-2"
          />
          {loginForm.touched.username && loginForm.errors.username && (
            <div class="alert alert-danger my-1" role="alert">
              {loginForm.errors.username}
            </div>
          )}
        </div>
        <div>
          <label htmlFor="password" className='p-5 font-bold text-zinc-700'>Password</label>
          <input
            value={loginForm.values.password}
            onChange={loginForm.handleChange}
            onBlur={loginForm.handleBlur}
            name="password"
            type="password"
            id="password"
            className="p-2 px-5 rounded-2xl w-full my-2"
          />
          {loginForm.touched.password && loginForm.errors.password && (
            <div className="" role="alert">
              {loginForm.errors.password}
            </div>
          )}
        </div>
        <button disabled={!loginForm.isValid} className="bg-zinc-900 text-white font-bold p-2 rounded-xl hover:bg-zinc-700 hover:transition-colors">login</button>
      </form>
      {userData && <div className='flex flex-col items-center w-[min(100%,600px)] align-middle text-3xl text-white' >

          <img src={userData.image} alt="" className='rounded-full object-fit w-36 shadow-neutral-400 shadow-md m-5'/>
            <p className='p-5'>{userData.firstName}</p>
        </div>}

        {/* <img src="darkgrad.png" alt="" className='absolute -z-10 w-full h-full object-fit top-0'/> */}
    </div>
  )
}

