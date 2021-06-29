import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Publications from './pages/publications'
import Register from './pages/register'
import ShareThoughtsPage from './pages/share-thoughts'
import Login from './pages/login'
import Profile from './pages/profile'
import Error from './pages/error'

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* {loggedIn ?         <Route path="/share" component={ShareThoughtsPage} /> : <Redirect to={} component={}/>} */}
        <Route exact path="/" component={Publications} />
        <Route path="/share" component={ShareThoughtsPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile/:userId" component={Profile} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation