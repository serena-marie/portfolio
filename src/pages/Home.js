import React from 'react'
import '../styles/Home.scss'
import SuperHeroIntro from '../components/SuperHeroIntro'
import ProjectsList from '../components/ProjectsList'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='homeContainer'>
      <div className='aboutPanel'>
        <div className='stickyContent'>
          <SuperHeroIntro/>
          <div className='quickNav'>
            <Link to='/about'>
              <button className='navButton'>Learn more about me</button>
            </Link>
          </div>
        </div>
      </div> 
      <div className='projectsPanel'>
        <ProjectsList />
      </div>
    </div>
  )
}