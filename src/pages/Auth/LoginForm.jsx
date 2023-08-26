import React from 'react'
import Login from '../../components/Auth/Login'

const LoginForm = () => {
  return (
    <div className='d-flex pb-24 align-items-center !h-[max(100%,90vh)]'>
      <div className='w-50'>
    <Login/>
      </div>
    </div>
  )
}

export default LoginForm