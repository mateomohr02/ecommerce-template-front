import React from 'react'

import RegisterForm from '../components/RegisterForm/RegisterForm'
import LoginForm from '../components/LoginForm/LoginForm'

const RegisterLogin = () => {
  return (
    <div className='flex justify-evenly items-center'>

        <RegisterForm/>

        <LoginForm/>

    </div>
  )
}

export default RegisterLogin