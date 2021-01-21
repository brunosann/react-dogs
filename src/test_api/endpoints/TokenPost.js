import React from 'react'

const TokenPost = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [token, setToken] = React.useState('')

  const handleForm = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({
      username,
      password,
    })
    const sendUser = await fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    })
    const response = await sendUser.json()
    setToken(response.token)
  }

  return (
    <form style={{marginTop: '30px'}} onSubmit={handleForm}>
      <h2>Token Post</h2>
      <input onChange={({target}) => setUsername(target.value)} type="text" name="user" placeholder="Usuario"/>
      <input onChange={({target}) => setPassword(target.value)} type="password" name="password" placeholder="Senha"/>
      <button type="submit">Enviar</button>
      {token && <p style={{wordBreak: 'break-all'}}>{token}</p>}
    </form>
  )
}

export default TokenPost
