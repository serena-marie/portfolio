import React from 'react'
import { updatePageTitle } from '../utils/updatePageTitle'
import '../styles/home.scss'
import me from '../assets/me.jpg'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasTitleUpdate: false
    }
  }

  componentDidMount () {
    if (!this.hasTitleUpdate) {
      updatePageTitle()
      this.hasTitleUpdate = true
    }
  }

  render () {
    return (
            <div>
                <div className='homeWrapper'>
                    <div className="homeImageDiv">
                        <img src={me} className="homeImage" alt="it me"/>
                    </div>
                    <div className="centeredHeader">
                        <p>Hi there! My name is Serena.</p>
                        <p className='ima'>I&apos;m a San Francisco based Software Engineer by way of Austin, Texas. </p>
                    </div>
                </div>
                <div className='aboutMe'>
                    <p> I graduated from Texas State University with a Bachelor&apos;s in Computer Science. My work experience has primarily been developing and maintaining web-based internal tools; however, I love learning new technologies and am very interested in working with all parts of the stack. </p>
                    <p> If I&apos;m not coding, I&apos;m probably playing video games, reading books, exploring SF, and drinking copious amounts of coffee.</p>
                </div>
            </div>
    )
  }
}

export default Home
