import React from 'react'
import Header from './components/header/index'
import styles from './app.module.css'
import Aside from './components/aside'
import Posts from './components/posts'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Posts />
      </div>
    </div>
  )
}

export default App
