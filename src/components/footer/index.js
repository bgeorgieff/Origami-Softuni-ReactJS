import React from 'react'
import Link from '../link/index'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'

const Footer = () => {
  const links = getNavigation()

  return (
    <footer className={styles.footer}>
      <div>
      {
        links.map(nav => {
          return (
            <Link key={nav.title} href={nav.link} title={nav.title} type="footer" />
          )
        })
      }
      </div>
      <p className={styles["footer-para"]}>SoftUni Workshop</p>
    </footer>
  )
}

export default Footer