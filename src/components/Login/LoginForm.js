import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Forms/Button'
import Input from '../Forms/Input'
import Error from '../Helpers/Error'
import style from './LoginForm.module.css'
import styleBtn from '../Forms/Button.module.css'

const LoginForm = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const {userLogin, error, loading} = React.useContext(UserContext)

  async function handleSubmit(event) {
    event.preventDefault()
    if (!username || !password) return
    userLogin(username, password)
  }

  return (
    <section className="animaLeft">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="usuario" value={username} setValue={setUsername} />
        <Input label="Senha" type="password" name="password"  value={password} setValue={setPassword} />
        {loading ? 
          ( <Button disabled>Carregando...</Button>)
          :
          ( <Button>Entrar</Button>)
        }
        {error && <Error error={error} />}
      </form>
      <Link className={style.perdeu} to="/login/redefinir">Esqueceu a Senha?</Link>
      <h2 className={style.subtitle}>Cadastre-se</h2>
      <p className={style.cadastro}>Ainda não possui conta? Cadastre-se!</p>
      <Link className={styleBtn.button} to="/login/cadastrar">Cadastrar</Link>
      <br/>
    </section>
  )
}

export default LoginForm
