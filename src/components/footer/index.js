import React from 'react'
import Link from '../link/index'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation'
import UserContext from '../../Context'

class Footer extends React.Component {

  static contextType = UserContext

  render() {
    const {
      loggedIn,
      user
    } = this.context
  
    const links = getNavigation(loggedIn, user)
  
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
}

export default Footer