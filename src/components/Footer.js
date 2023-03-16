import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
class Footer extends React.Component {
  handleClick (url, e) {
    e.stopPropagation()
    return url ? window.open(url, '_blank') : ''
  }

  render () {
    return (
      <div className='footerDiv'>
          <FontAwesomeIcon icon={faGithub} className='link' onClick={this.handleClick.bind(this, 'https://github.com/serena-marie')}/>
          <FontAwesomeIcon icon={faLinkedin} className='link' onClick={this.handleClick.bind(this, 'https://linkedin.com/in/serenacodes')}/>
      </div>
    )
  }
}

export default Footer
