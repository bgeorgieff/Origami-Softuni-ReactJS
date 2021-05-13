import React from 'react'
import styles from './index.module.css'
import Link from '../link/index'
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation'

const Header = () => {
  const links = getNavigation()

  return (
    <header className={styles.navigation}>
      <img className={styles.logo} src={logo} alt="logo" />
      {
        links.map(nav => {
          return (
            <Link href={nav.link} title={nav.title} type="header" />
          )
        })
      }
    </header>
  )
}

export default Header