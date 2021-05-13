import React from 'react'
import Header from '../header'
import styles from './index.module.css'
import Aside from '../aside/index'
import Footer from '../footer/index'

const PageWrapper = (props) => {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div className={styles.main}>
          {props.children}
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default PageWrapper
