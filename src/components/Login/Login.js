import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="cadastrar" element={<LoginCreate />} />
        <Route path="redefinir" element={<LoginPasswordLost />} />
      </Routes>
    </React.Fragment>
  )
}

export default Login
