import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import './styles/App.scss'
import './styles/reset.css'
import Home from './pages/Home'
import Projects from './pages/Projects'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div className="wrapper">
          <div className="appBody">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
