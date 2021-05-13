import React from 'react'
import styles from './index.module.css'
import image from '../../images/logo.svg'

const Origami = ({ description, author, index }) => {
  return (
    <div className={styles.container}>
      <img className={styles["post-image"]} src={image} />
      <span>{index} - </span>
      <p className={styles.description}>
        {description}
      </p>
      <div>
        <span className={styles.user}>
          <small>Author: </small>
          {author.username}
        </span>
      </div>
    </div>
  )
}

export default Origami