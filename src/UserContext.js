import React from 'react'
import {TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST} from './api'

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
  const [data, setData] = React.useState(null)
  const [login, setLogin] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)

  async function getUser(token) {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const responseJson = await response.json()
    setData(responseJson)
    setLogin(true)
  }

  const userLogout = React.useCallback(function() {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    // window.location.pathname = '/login'
  }, [])

  React.useEffect(() => {
    const autoLogin = async () => {
      const token = window.localStorage.getItem('token')
      if(token) {
        try {
          setError(null)
          setLoading(true)
          const {url, options} = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token invalído')
          await getUser(token)
        } catch (error) {
            userLogout()
        } finally {
            setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin()
  }, [userLogout])

  async function userLogin(username, password) {
    try {
      setError(null)
      setLoading(true)
      const {url, options} = TOKEN_POST({username, password})
      const response = await fetch(url, options)
      if (!response.ok) throw new Error(`Usuario não autorizado`)
      const {token} = await response.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      // window.location.pathname = '/conta'
    } catch (error) {
        setError(error.message)
        setLogin(false)
    } finally {
        setLoading(false)
    }
    
  }

  return (
    <UserContext.Provider value={{userLogin, data, userLogout, error, login, loading}}>
      {children}
    </UserContext.Provider>
  )
}


