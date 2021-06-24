import React, { Component } from 'react'
import Origamis from '../../components/origamis'
import PageWrapper from '../../components/page-wrapper'

class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = { 
      username: '',
      posts: null
     }
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userId)
  }

  getUser = async (id) => {
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`)
    
    if (!response.ok) {
      this.props.history.push('/error')
    }
    
    const user = await response.json()
    
    this.setState({
      username: user.username,
      posts: user.posts && user.posts.length
    })
  }

  render() { 
    const {
      username,
      posts
    } = this.state

    if (!username) {
      return (
        <PageWrapper>
          <div>loading...</div>
        </PageWrapper>
      )
    }

    return ( 
      <PageWrapper>
        <div>
          <p>User: {username} </p>
          <p>Posts: {posts} </p>
        </div>
        <Origamis length={3} />
      </PageWrapper>
     )
  }
}
 
export default Profile