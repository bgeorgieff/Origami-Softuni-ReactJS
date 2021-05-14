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

const Navigation = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Publications} />
        <Route path="/share" component={ShareThoughtsPage} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Navigation