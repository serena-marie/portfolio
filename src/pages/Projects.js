import React from 'react'
import Card from '../components/Card.js'
import { updatePageTitle } from '../utils/updatePageTitle.js'
class Project extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasTitleUpdate: false
    }
  }

  componentDidMount () {
    if (!this.hasTitleUpdate) {
      console.log('In projects, updatingPageTitle')
      updatePageTitle('Projects')
      this.hasTitleUpdate = true
    }
  }

  render () {
    return (
      <div>
        <h3 className='pageTitle'>Recent Work:</h3>
        <Card/>
      </div>
    )
  }
}

export default Project
