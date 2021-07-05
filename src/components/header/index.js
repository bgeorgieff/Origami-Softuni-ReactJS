import React from 'react'
import styles from './index.module.css'
import Link from '../link/index'
import logo from '../../images/white-origami-bird.png'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Header extends React.Component {

  static contextType = UserContext

  render() {
    const {
      user
    } = this.context
  
    
    const links = getNavigation(user)

    return ( 
      <header className={styles.navigation}>
        <img className={styles.logo} src={logo} alt="logo" />
        {
          links.map(nav => {
            return (
              <Link key={nav.title} href={nav.link} title={nav.title} type="header" />
            )
          })
        }
      </header>
    )  
  }
}

export default Header