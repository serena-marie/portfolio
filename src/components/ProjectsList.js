import projectData from '../data/projects.json'
import ProjectCard from './ProjectCard'


export default function ProjectsList() { 
  const getProjectSortedByHighlight = () => {
    const highlightedProjects = projectData.filter(project => project?.highlight)
    const notHighlightedProjects = projectData.filter(project => !project?.highlight)

    return [...highlightedProjects, ...notHighlightedProjects];
  }


  return(
    // Rename to projectsContainer for naming consistency
    <div className='cardContainer'>
      {
       getProjectSortedByHighlight().map((projectDetail, index) => (
          <ProjectCard details={projectDetail} key={index}/>
        ))
      }
    </div>
  )
}
