import React, { useContext, useState } from 'react'
import Submit from '../../components/button'
import Input from '../../components/input';
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import authenticate from '../../utils/authenticate'
import styles from './index.module.css'
import UserContext from '../../Context'
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRepassword] = useState('')
  const context = useContext(UserContext)
  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()

    await authenticate('http://localhost:9999/api/user/register', {
      username,
      password
    }, (user) => {
      context.logIn(user)
      history.push('/')
    }, (e) => {
      console.log('ney', e);
    })
  }

  return (
    <PageWrapper>
      <form className={styles.container} onSubmit={handleSubmit}>
        <Title title="Register" />
        <Input 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          label="Username"
          id="username" />
        <Input 
          type="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          label="Password"
          id="password" />
        <Input 
          type="password"
          value={rePassword}
          onChange={(e) => {setRepassword(e.target.value)}}
          label="Repeat Password"
          id="repeat-password" />
        <Submit title="Register" />
      </form>
    </PageWrapper>
  )
}

export default Register