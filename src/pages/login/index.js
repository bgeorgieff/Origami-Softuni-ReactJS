import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import Submit from '../../components/button'
import Input from '../../components/input'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import style from './index.module.css'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const context = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await authenticate('http://localhost:9999/api/user/login', {
      username,
      password
    }, (user) => {
      context.logIn(user)
      history.push('/')
    }, (e) => {
      console.log('Error', e)
    })
  }
  
  return (
    <PageWrapper>
      <form className={style.container} onSubmit={handleSubmit}>
        <Title title="Login" />
        <Input 
          value={username}
          onChange={e => { setUsername(e.target.value) }}
          label="Username"
          id="username" />
        <Input 
          type="password"
          value={password}
          onChange={e => { setPassword(e.target.value) }}
          label="Password"
          id="repassword" />
        <Submit title="Login" />
      </form>
    </PageWrapper>
  )
}

export default Login