import React, { Component } from 'react'
import Submit from '../../components/button'
import Input from '../../components/input';
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import style from './index.module.css'
import authenticate from '../../utils/authenticate'
import UserContext from '../../Context';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }
  }

  static contextType = UserContext

  handleChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { 
      username, 
      password
    } = this.state

    await authenticate('http://localhost:9999/api/user/login', {
      username,
      password
    }, (user) => {
      this.context.logIn(user)
      this.props.history.push('/')
    }, (e) => {
      console.log('Error', e)
    })
  }

  render() {
    const {
      username,
      password
    } = this.state

    return (
      <PageWrapper>
        <form className={style.container} onSubmit={this.handleSubmit}>
          <Title title="Login" />
          <Input 
            value={username}
            onChange={(e) => {this.handleChange(e, 'username')}}
            label="Username"
            id="username" />
          <Input 
            type="password"
            value={password}
            onChange={(e) => {this.handleChange(e, 'password')}}
            label="Password"
            id="repassword" />
          <Submit title="Login" />
        </form>
      </PageWrapper>
    )
  }
}

export default Login