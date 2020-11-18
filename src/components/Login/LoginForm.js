import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Forms/Button'
import Input from '../Forms/Input'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (!username || !password) return
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
        <Input label="Usuario" type="text" name="usuario" value={username} setValue={setUsername} />
        <Input label="Senha" type="password" name="password"  value={password} setValue={setPassword} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/cadastrar">Cadastrar</Link>
      <br/>
      <Link to="/login/redefinir">Esqueceu Senha</Link>
    </section>
  )
}

export default LoginForm
