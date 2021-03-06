import React from 'react'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import useFetch from '../../Hooks/useFetch'
import {PASSWORD_RESET} from "../../api";
import Error from '../Helpers/Error'
import Head from '../Helpers/Head'
import { useNavigate } from 'react-router-dom'

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('')
  const [key, setKey] = React.useState('')
  const password = useForm()
  const {error, loading, data, request} = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.href)
    const key = params.get('key')
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (password.value) {
      const {url, options} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      })
      const {response} = await request(url, options)
      if (response.ok) navigate('/login')
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Resetar a Senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova Senha" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginPasswordReset
