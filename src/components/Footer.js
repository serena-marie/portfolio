import React from 'react';
import {GithubCircle, LinkedinBox} from 'mdi-material-ui';

class Footer extends React.Component{
  render(){
      return(
        <div className="headerDiv">
          <a className="link" href="http://github.com/serena-marie"> <GithubCircle/> </a>
          <a className="link" href="http://www.linkedin.com/in/serena-gutierrez-a7177492"><LinkedinBox/></a>
        </div>
      )
  }
}

export default Footer;