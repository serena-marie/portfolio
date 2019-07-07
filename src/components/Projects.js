import React from 'react';
import ProjectCard from './ProjectCard.js';

class Project extends React.Component {
  render (){
    return(
      <div>
        <h1>Recent Work:</h1>
        <ProjectCard/>
      </div>
    )
  }
}

export default Project;