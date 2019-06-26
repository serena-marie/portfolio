import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";


import App from './App.js'
import Home from './components/Home.js'
/*import Projects from './components/Projects.js'*/


export default (
  <Router>
    <div>
    <Route path='/' exact component={App} />
    <Route path='/index' component={Home} />
   { /*<Route path='/projects' component={Projects} />*/}
   </div>
  </Router>

  /*   <Router history={history}>
      <Route path='/' component={App}>
         <IndexRoute component={Home}/> 
        <Route exact path="/" component={Home} />
       / <Route path='/projects' component={Projects} />
      </Route>
</Router> */ 
);