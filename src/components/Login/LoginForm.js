import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      })
    })
    const responseJson = await response.json()
    console.log(responseJson)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input onChange={({target}) => setUsername(target.value)} type="text" name="name" value={username}/>
        <input onChange={({target}) => setPassword(target.value)} type="password" name="password" value={password}/>
        <button>Entrar</button>
      </form>
      <Link to="/login/cadastrar">Cadastrar</Link>
      <br/>
      <Link to="/login/redefinir">Esqueceu Senha</Link>
    </section>
  )
}

export default LoginForm
