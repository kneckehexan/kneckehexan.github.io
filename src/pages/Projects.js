import React from 'react'
import '../styles/project.css'
import mern from '../img/Opera Snapshot_2022-03-17_000205_logmaker.herokuapp.com.png'
import prevport from '../img/Opera Snapshot_2022-03-17_001019_62.20.202.130.png'
import lamp from '../img/Opera Snapshot_2022-03-17_001055_62.20.202.130.png'
import bjecv from '../img/Opera Snapshot_2022-03-17_143847_62.20.202.130.png'
import Latex from '../img/LaTeX_logo.svg'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaLinux } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiExpress, SiApache, SiMysql, SiPhp, SiFlask, SiNginx, SiDocker } from 'react-icons/si'

function Projects() {
  return (
    <div>
      <section>
        <header><h1>Projects</h1></header>
        <p>Here are my very own projects that I've made.</p>
        <div className='project-container'>
          <article>
            <header><h2><span className='span-left'>Log app</span><span className='span-right'><DiMongodb /><SiExpress /><FaReact /><FaNodeJs /></span></h2></header>
            <div className='project-img-container'><a href="https://logmaker.herokuapp.com" target="_blank" rel="noopener noreferrer" ><img src={mern} alt='MERN app' /></a></div>
            <p>Description: I wanted to see how a react-express front-end worked with a nodejs back-end, connected to a mongodb. Also learned how to code a simple login function, how to properly store passwords and so on.</p>
          </article>
          <article>
            <header><h2><span className='span-left'>Previous portfolio</span><span className='span-right'><FaHtml5 /><FaCss3 /><FaJsSquare /></span></h2></header>
            <div className='project-img-container'><a href="http://62.20.202.130:81" target="_blank" rel="noopener noreferrer"><img src={prevport} alt='Previous portfolio' /></a></div>
            <p>Description: I created this as part of a final exercise in a web development course at Stockholm University in 2021.</p>
          </article>
          <article>
            <header><h2><span className='span-left'>Life Science Validation Helper</span><span className='span-right'><FaLinux /><SiApache /><SiMysql /><SiPhp /></span></h2></header>
            <div className='project-img-container'><img src={lamp} alt='LAMP Validation' /></div>
            <p>Description: During one of my proffessional assignments as a validation engineer, I created a simple database in which I could store and later easily compare different technical and user requirements for a system handeling solvent media. This is privatly hosted and no link is provided because of possible company restrictions.</p>
          </article>
          <article>
            <header><h2><span className='span-left'>CV-Generator</span><span className='span-right'><SiFlask /><SiNginx /><SiDocker /><img src={Latex} style={{height: 20, width: 50}} alt='latex logo'/></span></h2></header>
            <div className='project-img-container'><a href="http://62.20.202.130:85" target="_blank" rel="noopener noreferrer"><img src={bjecv} alt='Flask App' /></a></div>
            <p>Description: I created this flask app partly to increase my understanding of Flask apps but also Docker containers. The app is a CV-generator, where a PDF is produced according to a LaTeX template. This is privatly hosted and not always online.</p>
          </article>
        </div>
      </section>
    </div>
  )
}
export default Projects