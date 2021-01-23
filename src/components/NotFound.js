import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  
  React.useEffect(() => {
    navigate('/')
  }, [])

  return (
    <div className="container mainContainer">
      <h1 className="title" style={{width: '178px', margin: '0 auto'}}>Erro: 404</h1>
      <p style={{textAlign: 'center'}}>pagina não encontrada...</p>
    </div>
  )
}

export default NotFound
