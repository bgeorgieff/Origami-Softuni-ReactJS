import React from 'react'
import getNavigation from '../../utils/navigation'
import Link from '../link/index'
import styles from './index.module.css'

const Aside = () => {
  const links = getNavigation()
  
  return (
    <aside className={styles.aside}>
      {
        links.map(nav => {
          return (
            <Link key={nav.title} href={nav.link} title={nav.title} type="aside" />
          )
        })
      }
    </aside>
  )
}

export default Aside