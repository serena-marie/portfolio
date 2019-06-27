import React from 'react';
import {Route, HashRouter} from "react-router-dom";

import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Projects from './components/Projects.js';

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