import React, { useEffect, useState } from 'react'
import UserContext from './Context'
import getCookie from './utils/cookie'

const App = (props) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true
    })
  }

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setUser({
      loggedIn: false,
      user: null
    })
  }

  useEffect(() => {
    const token = getCookie('x-auth-token')

    if(!token) {
      logOut()
      setLoading(false)
      return
    }
    
    fetch('http://localhost:9999/api/user/authenticate', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
    }).then((promise) => {
      return promise.json()
    }).then((response) => {
      console.log(response);
      if(response) {
        logIn({
          username: response.user.username,
          id: response.user._id
        })
      } else {
        logOut()
      }
      setLoading(false)
    })
  }, []) 

  if(loading) {
    return (<div>Loading...</div>)
  }

  return (
    <UserContext.Provider value={{
      user,
      logIn: logIn,
      logOut: logOut
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default App