import { Link } from 'react-router-dom';
import '../styles/About.scss'
export default function About() {
  return(
    <div className="aboutContainer">
      <div className="title">Serena is human who does things.</div>
      <div className="bio">Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. Serena is human who does things. </div>
      <Link to="/"><button>Back</button></Link>
    </div>
  )
}