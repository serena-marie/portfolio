import React from 'react';
import '../App.css';
import me from '../assets/me.jpg';

class Home extends React.Component{
    render(){
        return(
            <div>
                <div className="rowC">
                    <div className="homeImageDiv">
                        <img src={me} className="homeImage" alt="it me"/>
                    </div>
                    <div className="centeredHeader">
                        Hi! My name is Serena. I'm a San Francisco based Software Engineer by way of Austin, Texas. 
                    </div>
                </div>
            <p>I'm a recent Computer Science graduate from Texas State University. I love learning new technologies and am constantly striving to challenge myself. I thrive in agile environments because I believe communication is of the utmost importance.</p>

            <p style={{fontStyle: 'italic'}}>This website is a work in progress!</p>
            </div>
            
        ); //end return
    }//end render
}//end class

export default Home;