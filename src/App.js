import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import './styles/App.scss'
import './styles/reset.css'
import Home from './pages/Home'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div className="appContainer">
          <div className="appBody">
            <Route exact path="/" component={Home}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
