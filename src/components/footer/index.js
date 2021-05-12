import React from 'react'
import Link from '../link/index'
import styles from './index.module.css'

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div>
        <Link href="#" title="Going to 1" type="footer"/>
        <Link href="#" title="Going to 2" type="footer"/>
        <Link href="#" title="Going to 3" type="footer"/>
        <Link href="#" title="Going to 4" type="footer"/>
      </div>
      <p className={styles["footer-para"]}>SoftUni Workshop</p>
    </footer>
  )
}

export default Footer