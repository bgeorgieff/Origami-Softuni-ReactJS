import React, { Component } from 'react'
import Submit from '../../components/button'
import Input from '../../components/input';
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import authenticate from '../../utils/authenticate';
import styles from './index.module.css';

class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      rePassword: ""
    }
  }

  onChange = (event, type) => {
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

    await authenticate('http://localhost:9999/api/user/register', {
      username,
      password
    }, () => {
      console.log('yey')
      this.props.history.push('/')
    }, (e) => {
      console.log('ney', e);
    })
  }

  render () {
    const {
      username,
      password,
      rePassword
    } = this.state

    return (
      <PageWrapper>
        <form className={styles.container} onSubmit={this.handleSubmit}>
          <Title title="Register" />
          <Input 
            value={username}
            onChange={(e) => {this.onChange(e, 'username')}}
            label="Username"
            id="username" />
          <Input 
            type="password"
            value={password}
            onChange={(e) => {this.onChange(e, 'password')}}
            label="Password"
            id="password" />
          <Input 
            type="password"
            value={rePassword}
            onChange={(e) => {this.onChange(e, 'rePassword')}}
            label="Repeat Password"
            id="repeat-password" />
          <Submit title="Register" />
        </form>
      </PageWrapper>
    )
  }
}

export default Register