import React from 'react';
import {Route, HashRouter} from "react-router-dom";
import ReactGA from 'react-ga';
import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';

function initReactGA(){
  ReactGA.initialize('UA-143101404-1');
  ReactGA.pageview('#'); //test
}
function App() {
  return (
    <HashRouter>
      <div class="wrapper">
        {/* Header */}
        <div class="appHeader">
          <Header/>
        </div>

        {/* Body  */}
        <div class="appBody"> 
          <Route exact path="/" component={Home}/>
          <Route path="/projects" component={Projects}/>
        </div>
  
        {/* Footer */}
        <div class="appFooter"> </div>
      </div> 
    </HashRouter>
    
  );
}

export default App;