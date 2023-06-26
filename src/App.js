import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import './styles/App.css'
import Header from './components/Header.js'
import Home from './pages/Home'
import Projects from './pages/Projects.js'
import Footer from './components/Footer.js'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <div className="wrapper">
          <div className="appHeader">
            <Header/>
          </div>

          <div className="appBody">
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
          </div>

          <div className="appFooter">
            <Footer/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
