import React from 'react'
import Origami from '../origami'
import styles from './index.module.css'

class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      origamis: []
    }
  }

  getOrigamis = async () => {
    const promise = await fetch('http://localhost:9999/api/origami')
    const origamis = await promise.json()

    this.setState({
      origamis
    })
  }

  renderOrigamis() {
    const { origamis } = this.state

    return origamis.map((e, index) => {
      return (
        <Origami key={e._id} index={index} {...e} />
      )
    })
  }

  componentDidMount() {
    this.getOrigamis()
  }

  render() {
    
    return (
      <div className={styles.main}>
        <h1 className={styles.title}>Origamis</h1>
        <div className={styles["origamis-wrapper"]}>
          {this.renderOrigamis()}
        </div>
      </div>
    )
  }
}

export default Posts