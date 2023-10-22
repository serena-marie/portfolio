import React from 'react'
import '../styles/Home.scss'
import SuperHeroIntro from '../components/SuperHeroIntro'
import ProjectsList from '../components/ProjectsList'

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='aboutPanel'>
        <div className='stickyContent'>
          <SuperHeroIntro/>
          <div className='quickNav'>
            <button className='navButton'>Learn more about me</button>
          </div>
        </div>
      </div> 
      <div className='projectsPanel'>
        <ProjectsList />
      </div>
    </div>
  )
}
