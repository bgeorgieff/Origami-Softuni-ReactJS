import React from 'react'
import Header from './components/header/index'
import styles from './app.module.css'
import Aside from './components/aside'
import Posts from './components/posts'
import Footer from './components/footer'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <Posts />
        <Footer />
      </div>
    </div>
  )
}

export default App
