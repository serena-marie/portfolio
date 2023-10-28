import { Link } from 'react-router-dom';
import '../styles/About.scss'
import me from '../assets/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function About() {
  return(
    <div className="aboutContainer">
      <div className='pictureOfMe' >
        <img src={me} width={'650px'}alt='Serena sitting on some rocks at the beach. The vibes are immaculate'/>
      </div>
      <div className='bioContainer'>
        <div className="title">About Serena</div>
        <div className="bio">
          <p>
            Howdy! I'm a software engineer based in San Francisco by way of Austin, Texas. I primarily work with all things JavaScript -- Vue, Node, React, etc. With that said, I never say no to a challenge, enjoy learning the ins and outs of programming languages, and have fun working with all parts of the stack.
          </p>
          <p>
            I previously developed and maintained features for an internal web-based tool used by the Support and Engineering teams at Lightstream. I also have a background in Customer Support, and I constantly think about the user experience. In 2019, I graduated from Texas State University with a Bachelor's in Computer Science. Throughout college, I worked with C/C++ and Python and some of my favorite electives were Maching Learning, Computer Vision, Statistical Genetics + Bioinformatics and a project course where I got to work closely with other CS students developing a mobile app in an agile environment.
          </p>
          <p>
            When I'm not coding, you might find me drinking lots of coffee, playing video games, and nerding out about music.
          </p>
        </div>
        <div className='socialMedia'>
          <p className='socialMediaIntro'>You can also find me around the internet, sometimes:</p>
          <div className='socialMediaLinks'>
            <div className='link'>
              <FontAwesomeIcon icon={faGithub} className='fontAwesomeIcons'/> <a href='https://github.com/serena-marie' target='_blank'>GitHub</a>
            </div>
            <div className='link'>
              <FontAwesomeIcon icon={faLinkedin} className='fontAwesomeIcons'/> <a href='https://linkedin.com/in/serenacodes'>LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
      <Link to="/" ><button className="projectLink">Back</button></Link>
    </div>
  )
}