import React from 'react';
import '../App.css';

class Home extends React.Component{
    render(){
        return(
            <div class="wrapper">
                <div class="centeredHeader">
                    Hi! My name is Serena. I am currently working on this.
                    <p>
                    In the meantime, checkout my <a href="https://github.com/serena-marie">Github!</a> 
                    </p>
                </div>
            </div>
            
        ); //end return
    }//end render
}//end class

export default Home;