import React from 'react'
import styles from './index.module.css'

const Submit = ( {title} ) => {
  return (
    <button type="submit" className={styles.submit}>{title}</button>
  )
}

export default Submit