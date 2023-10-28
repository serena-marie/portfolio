import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import './styles/App.scss'
import './styles/reset.css'
import Home from './pages/Home'
import About from './pages/About'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div className="appContainer">
          <div className="appBody">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
