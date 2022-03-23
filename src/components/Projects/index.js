import React from 'react'
import {ProjectsContainer, ProjectsH1, ProjectsWrapper, ProjectBtn, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP} from './ProjectElements'
import Icon1 from '../../img/png-logapp.png'
import Icon2 from '../../img/png-prevport.png'
import Icon3 from '../../img/png-valhelp.png'
import Icon4 from '../../img/png-cvgen.png'
import Latex from '../../img/LaTeX_logo.svg'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaLinux } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiExpress, SiApache, SiMysql, SiPhp, SiFlask, SiNginx, SiDocker } from 'react-icons/si'

const Projects = () => {
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>Personal Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectBtn href='https://logmaker.herokuapp.com' target='_blank' rel='noreferrer noopener'>
          <ProjectsCard>
            <ProjectsIcon src={Icon1} />
            <ProjectsH2>Log App</ProjectsH2>
            <ProjectsP><DiMongodb /><SiExpress /><FaReact /><FaNodeJs /></ProjectsP>
            <ProjectsP>An app from which I learned how to implement a MERN stack. Create an account, create various logs and start typing what ever you want to log. Supports markdown. </ProjectsP>
          </ProjectsCard>
        </ProjectBtn>
        <ProjectBtn href='http://62.20.202.130:81' target='_blank' rel='noreferrer noopener'>
          <ProjectsCard>
            <ProjectsIcon src={Icon2} />
            <ProjectsH2>Previous portfolio</ProjectsH2>
            <ProjectsP><FaHtml5 /><FaCss3 /><FaJsSquare /></ProjectsP>
            <ProjectsP>A very simple website that was part of an assignment in one of the courses I took in webdevelopment. Privatly hosted.</ProjectsP>
          </ProjectsCard>
        </ProjectBtn>
        <ProjectBtn>
          <ProjectsCard>
            <ProjectsIcon src={Icon3} />
            <ProjectsH2>Validation Helper</ProjectsH2>
            <ProjectsP><FaLinux /><SiApache /><SiMysql /><SiPhp /></ProjectsP>
            <ProjectsP>A LAMP-stack, that I used to aid me in one of my professional assignments with a client within Life Science. No link is provided because of possible sensitive data.</ProjectsP>
          </ProjectsCard>
        </ProjectBtn>
        <ProjectBtn href='http://62.20.202.130:85' target='_blank' rel='noreferrer noopener'>
          <ProjectsCard>
            <ProjectsIcon src={Icon4} />
            <ProjectsH2>CV Generator</ProjectsH2>
            <ProjectsP><SiFlask /><SiNginx /><SiDocker /><img src={Latex} style={{height: 20, width: 50}} alt='latex logo'/></ProjectsP>
            <ProjectsP>Creates a CV using a LaTeX template according to one of my employers. Link is provided, but the app will not always be up as it is privatly hosted.</ProjectsP>
          </ProjectsCard>
        </ProjectBtn>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects