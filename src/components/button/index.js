import React from 'react'
import styles from './index.module.css'

const Submit = ( {title} ) => {
  return (
    <button className={styles.submit}>{title}</button>
  )
}

export default Submit