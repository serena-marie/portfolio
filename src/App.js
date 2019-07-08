import React from 'react';
import ReactGA from 'react-ga';
import {Route, HashRouter} from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';

class App extends React.Component {

  constructor(props){
    super(props);
    
    ReactGA.initialize('UA-143101404-1');
    ReactGA.pageview(window.location.pathname);
  }

  render(){
    return (
      <HashRouter>
        <div class="wrapper">
          <div class="appHeader">
            <Header/>
          </div>

          <div class="appBody"> 
            <Route exact path="/" component={Home}/>
            <Route path="/projects" component={Projects}/>
          </div>

          <div class="appFooter">
            <Footer/>
          </div>
        </div> 
      </HashRouter>
    );
  }
}

export default App;