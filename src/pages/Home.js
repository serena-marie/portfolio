import React, {useState, useEffect } from 'react'
import '../styles/Home.scss'
import SuperHeroIntro from '../components/SuperHeroIntro'
import ProjectsList from '../components/ProjectsList'
import { Link } from 'react-router-dom';
import { updatePageTitle } from '../utils/updatePageTitle'


export default function Home() {
  const [hasTitleUpdate, setHasTitleUpdate] = useState(false);

  useEffect(() => {
    if (!hasTitleUpdate) {
      updatePageTitle();
      setHasTitleUpdate(true);
    }
  }, [hasTitleUpdate]);
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