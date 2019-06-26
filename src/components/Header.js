import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
            <div class="headerDiv">
                <Link to="/">About</Link>
                
                <Link to="/projects">Projects</Link>
            </div>
        );
    }
}
export default Header;