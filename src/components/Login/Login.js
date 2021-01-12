import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import LoginPasswordLost from './LoginPasswordLost'
import style from "./Login.module.css";

const Login = () => {
  const {login} = React.useContext(UserContext)

  if (login === true) return <Navigate to="/conta" />

  return (
    <React.Fragment>
      <section className={style.login}>
        <div className={style.forms}>
          <Routes>
            <Route path="" element={<LoginForm />} />
            <Route path="cadastrar" element={<LoginCreate />} />
            <Route path="redefinir" element={<LoginPasswordLost />} />
          </Routes>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Login
