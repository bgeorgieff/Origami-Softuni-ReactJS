import React from 'react'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'
import Submit from '../../components/button';
import Origamis from '../../components/origamis';


const ShareThoughtsPage = () => {
  return (
    <PageWrapper>
      <Title title="Share your Thoughts" />
      <div className={styles.input}>
        <div>
          <textarea className={styles["text-container"]} defaultValue="Publications..."></textarea>
        </div>
        <div>
          <Submit title="Post"/>
        </div>
      </div>
      <Origamis length={3}/>
    </PageWrapper>
  )
}

export default ShareThoughtsPage