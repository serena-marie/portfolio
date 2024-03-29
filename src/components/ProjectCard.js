import './../styles/Projects.scss'
export default function ProjectCard({details, index}) { 

  function handleClick (e, type) {
    e.stopPropagation()
    const url = type === 'sourceCode' ? details?.sourceCode : details?.url;
    
    if (url) {
      window.open(url, '_blank');
    }
  }

  function setImageUrl () {
    if (!details.image) return ''
    return require(`../assets/${details.image}`)
  }

  function isSourceCodeAvailable () {
    return details?.sourceCode !== undefined && details.sourceCode !== ''
  }

  function isLiveSiteAvailable () {
    return details?.url !== undefined && details.url !== '';
  }
  
  return (
    <div className='projectCard'>
        <div className='cardImage'>
          <img src={setImageUrl()} alt={`${details?.title} project`} width={'640px'} height={'360px'}/>
        </div>
      <div className='cardContent'>
        <div className='cardHeader'>
          {
            details.tech.map((t) => {
              return <span className='projectTech' key={Date.now()+t}>{t}</span>
            })
          }
        </div>
        <div className='cardProjectInformation'>
          <p className='projectTitle'>{details.title}</p>
          <div className='sectionDivider'></div>
          <p className='projectSummary'>{details?.blurb}</p>
          <p className='projectDescription'>{details.info}</p>
        </div>
        <div className='cardFooter'>
          { isLiveSiteAvailable() ? <button className='siteLink projectLink' onClick={handleClick}>Site</button> : ' '}
          { isSourceCodeAvailable() ? <button className='sourceCodeLink projectLink' onClick={(e) => handleClick(e, 'sourceCode')}>Source Code</button> : ''}
        </div>
      </div>
    </div>
  )
} 