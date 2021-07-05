import React, { useState, useContext, useEffect, useCallback } from 'react'
import { useParams, useHistory } from 'react-router'
import Origamis from '../../components/origamis'
import PageWrapper from '../../components/page-wrapper'
import UserContext from '../../Context'

const Profile = () => {
  const [username, setUsername] = useState('')
  const [posts, setPosts] = useState(null)
  const context = useContext(UserContext)
  const match = useParams()
  const history = useHistory()

  const logOut = () => {
    context.logOut()
    history.push('/')
  }

  const getData = useCallback(async () => {
    const id = match.userId
    const response = await fetch(`http://localhost:9999/api/user?id=${id}`)

    if (!response.ok) {
      this.props.history.push('/error')
    } else {
      const user = await response.json()
      setUsername(user.username) 
      setPosts(user.posts && user.posts.length)
    }
  }, [match.userId])

  useEffect(() => {
    getData ()
  }, [getData])

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
        <button onClick={logOut}>Log Out</button>
      </div>
      <Origamis length={3} />
    </PageWrapper>
   )
}
 
export default Profile