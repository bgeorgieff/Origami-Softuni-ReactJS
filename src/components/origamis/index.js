import React, { useState, useEffect, useCallback } from 'react'
import styles from './index.module.css'
import Origami from '../origami'
import getOrigami from '../../utils/origami'

const Origamis = (props) => {
  const [origamis, setOrigamis] = useState(props.origami || [])

  const getOrigamis = useCallback(async () => {
    const origamis = await getOrigami(props.length)
    setOrigamis(origamis)
  }, [props.length])

  const renderOrigamis = () => {
    return origamis.map((e, index) => {
      return (
        <Origami key={e._id} index={index} {...e} />
      )
    })
  }

  useEffect(() => {
    console.log('object');
    getOrigamis()
  }, [props.UpdatedOrigami])

  return (
    <div className={styles["origamis-wrapper"]}>
      {renderOrigamis()}
    </div>
  )
}

export default Origamis
