import React from 'react'

const PhotoPost = () => {
  const [token, setToken] = React.useState('')
  const [img, setImg] = React.useState('')
  const [nome, setNome] = React.useState('')
  const [peso, setPeso] = React.useState('')
  const [idade, setIdade] = React.useState('')

  const handleForm = async (e) => {
    e.preventDefault()
    const data = new FormData()
    data.append('img', img)
    data.append('nome', nome)
    data.append('peso', peso)
    data.append('idade', idade)

    const sendUser = await fetch('https://dogsapi.origamid.dev/json/api/photo', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer' + token
      },
      body: data
    })
    const response = await sendUser.json()
    console.log(data)
    console.log(response)
  }

  return (
    <form style={{marginTop: '30px'}} onSubmit={handleForm}>
      <h2>User Post</h2>
      <input onChange={({target}) => setToken(target.value)} type="text" name="token" placeholder="Token"/>
      <input onChange={({target}) => setImg(target.files[0])} type="file" name="foto" placeholder="Foto"/>
      <input onChange={({target}) => setNome(target.value)} type="text" name="nome" placeholder="Nome"/>
      <input onChange={({target}) => setPeso(target.value)} type="text" name="peso" placeholder="Peso"/>
      <input onChange={({target}) => setIdade(target.value)} type="text" name="idade" placeholder="Idade"/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default PhotoPost
