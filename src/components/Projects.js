import React from 'react';
import '../App.css';
import data from '../data/projects.json';

class Project extends React.Component {
  render (){
    return(
      <div>
        <h1>Recent Work:</h1>
        {data.map((detail, index)=>{
          return <div>
            <table>
              <tr>
                <td>
                  <h2>{detail.title}</h2>
                  <p>{detail.info}</p>
                </td>
                <td>
                  <img src={require('../assets/'+detail.image)} width="150px" height="150px"/>
                </td>
              </tr>
              <tr>
                <td>{detail.tech}</td>
                <td>{detail.url}</td>
              </tr>
            
            </table>
            </div>
        })}
      </div> 
    )
  }
}

export default Project;