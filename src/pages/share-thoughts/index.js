import React, { useState } from 'react'
import PageWrapper from '../../components/page-wrapper'
import Title from '../../components/title'
import styles from './index.module.css'
import Submit from '../../components/button'
import Origamis from '../../components/origamis'
import getCookie from '../../utils/cookie'
import getOrigami from '../../utils/origami'


const ShareThoughtsPage = () => {
  const token = getCookie('x-auth-token')
  const [publication, setPublication] = useState('')
  const [updatedOrigami, setUpdatedOrigami] = useState([])

  const handleSubmit = async () => {
    const promise = await fetch('http://localhost:9999/api/origami', {
      method: 'POST',
      body: JSON.stringify({
        description: publication
      }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': token
      }
    })

    const data = await promise.json()
    const origamis = await getOrigami(3)
    setUpdatedOrigami(origamis)
  }

  return (
    <PageWrapper>
      <Title title="Share your Thoughts" />
      <div className={styles.input}>
        <div>
          <textarea 
            value={publication}
            className={styles["text-container"]} 
            onChange={e => {setPublication(e.target.value)}}>
          </textarea>
        </div>
        <div>
          <Submit title="Post" onClick={handleSubmit}/>
        </div>
      </div>
      <Origamis length={3} origami={updatedOrigami}/>
    </PageWrapper>
  )
}

export default ShareThoughtsPage