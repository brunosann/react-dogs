import React from 'react'

const UserPost = () => {
  const [username, setUsername] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleForm = async (e) => {
    e.preventDefault()
    const data = JSON.stringify({
      username,
      email,
      password,
    })
    const sendUser = await fetch('https://dogsapi.origamid.dev/json/api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data
    })
    const response = await sendUser.json()
    console.log(data)
    console.log(response)
  }

  return (
    <form onSubmit={handleForm}>
      <h2>User Post</h2>
      <input onChange={({target}) => setUsername(target.value)} type="text" name="user" placeholder="Usuario"/>
      <input onChange={({target}) => setPassword(target.value)} type="password" name="password" placeholder="Senha"/>
      <input onChange={({target}) => setEmail(target.value)} type="email" name="email" placeholder="Email"/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default UserPost
