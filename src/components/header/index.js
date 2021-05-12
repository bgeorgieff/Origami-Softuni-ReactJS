import React from 'react'
import styles from './index.module.css'
import Link from '../link/index'
import logo from '../../images/white-origami-bird.png'

const Header = () => {
  return (
    <header className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        <Link href="#" title="Going to 1" type="header"/>
        <Link href="#" title="Going to 2" type="header"/>
        <Link href="#" title="Going to 3" type="header"/>
        <Link href="#" title="Going to 4" type="header"/>
    </header>
  )
}

export default Header