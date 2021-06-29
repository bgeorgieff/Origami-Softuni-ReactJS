import React from 'react'
import UserContext from '../../Context'
import getNavigation from '../../utils/navigation'
import Link from '../link/index'
import styles from './index.module.css'

class Aside extends React.Component {

  static contextType = UserContext

  render() {

    const {
      loggedIn,
      user
    } = this.context

    const links = getNavigation(loggedIn, user)
    return (
      <aside className={styles.aside}>
        {
          links.map(nav => {
            return (
              <Link 
                key={nav.title} 
                href={nav.link} 
                title={nav.title} 
                  type="aside" 
              />
            )
          })
        }
      </aside>
    )
  }
}

export default Aside