import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
        <div className="headerDiv">
            <Link to="/" className="link">About</Link>
            <Link to="/projects" className="link">Projects</Link>
        </div>
    )
  }
}
export default Header
