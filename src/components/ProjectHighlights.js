// // Note to self: Rename to Projects.js
import projectData from '../data/projects.json'
import ProjectsList from './ProjectsList'
import Card from './Card'
import '../styles/Projects.scss'


export default function ProjectsCollection() {
  return(
    <div className='projectHighlights'>
      <div className='cardsContainer'>
        <div className='projectCard'>
          <div className='cardImage'>
            <img src='https://placekitten.com/988/556'/>
          </div>
          <div className='cardContent'>
            <div className='cardHeader'>
              <span className='projectTech'>React</span>
              <span className='projectTech'>SASS</span>
              <span className='projectTech'>React-Redux</span>
              <span className='projectTech'>HTML</span>
            </div>
            <div className='cardProjectInformation'>
              <p className='projectTitle'>Project Title</p>
              <div className='sectionDivider'></div>
              <p className='projectSummary'>A time management timer following the Pomodoro technique, inspired by pomofocus.io.</p>
              <p className='projectDescription'>This project uses React Redux state management to store user settings and timer data. It also uses local storage to replenish Redux store and persist the applications state across sessions. My inspiration for this project was that while using the Pomodoro technique, there were features I was craving - the need to add 5 more minutes to a timer to wrap up work, the desire to visual the pomodoro in a timeline format. I'm continuing to work on this to make these features possible, but it is deployed as a minimal timer.</p>
            </div>
            <div className='cardFooter'>
              <button className='siteLink projectLink'>Site</button>
              <button className='sourceCodeLink projectLink'>Source Code</button>
            </div>
          </div>
        </div>
        <div className='projectCard'>
          <div className='cardImage'>
            <img src='https://placekitten.com/988/556'/>
          </div>
          <div className='cardContent'>
            <div className='cardHeader'>
              <span className='projectTech'>React</span>
              <span className='projectTech'>SASS</span>
              <span className='projectTech'>React-Redux</span>
              <span className='projectTech'>HTML</span>
            </div>
            <div className='cardProjectInformation'>
              <p className='projectTitle'>Project Title</p>
              <div className='sectionDivider'></div>
              <p className='projectSummary'>A time management timer following the Pomodoro technique, inspired by pomofocus.io.</p>
              <p className='projectDescription'>This project uses React Redux state management to store user settings and timer data. It also uses local storage to replenish Redux store and persist the applications state across sessions. My inspiration for this project was that while using the Pomodoro technique, there were features I was craving - the need to add 5 more minutes to a timer to wrap up work, the desire to visual the pomodoro in a timeline format. I'm continuing to work on this to make these features possible, but it is deployed as a minimal timer.</p>
            </div>
            <div className='cardFooter'>
              <button className='siteLink projectLink'>Site</button>
              <button className='sourceCodeLink projectLink'>Source Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}