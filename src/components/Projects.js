import React from 'react';
import ProjectCard from './ProjectCard.js';

class Project extends React.Component {
  render (){
    return(
      <div>
        <h3>Recent Work:</h3>
        <ProjectCard/>
      </div>
    )
  }
}

export default Project;