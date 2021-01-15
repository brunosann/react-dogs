import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from "./userHeader.module.css";
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTile] = React.useState()
  const location = useLocation()

  React.useEffect(() => {
    switch(location.pathname) {
      case '/conta/postar':
        setTile('Poste Sua Foto')
        break
      case '/conta/estatisticas':
        setTile('Estatísticas')
        break
      default:
        setTile('Minha Conta')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader
