import React, { Component } from 'react'
import Submit from '../../components/button'
import Input from '../../components/input';
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import style from './index.module.css';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value

    this.setState(newState)
  }

  render() {
    const {
      email,
      password
    } = this.state

    return (
        <PageWrapper>
            <div className={style.container}>
              <Title title="Login" />
              <Input 
                value={email}
                onChange={(e) => {this.onChange(e, 'email')}}
                label="Email"
                id="email" />
              <Input 
                value={password}
                onChange={(e) => {this.onChange(e, 'password')}}
                label="Password"
                id="repassword" />
              <Submit title="Login" />
            </div>
        </PageWrapper>
    )
  }
}

export default Login