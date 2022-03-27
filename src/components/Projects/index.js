import React, {useState} from 'react'
import Modal from 'react-modal'
import {ProjectsContainer, ProjectsWrapper, ProjectBtn, ProjectsCard, ProjectsIcon, ProjectsH2, ProjectsP, ProjectsContent, Topline} from './ProjectElements'
import Icon1 from '../../img/png-logapp.png'
import Icon2 from '../../img/png-prevport.png'
import Icon3 from '../../img/png-valhelp.png'
import Icon4 from '../../img/png-cvgen.png'
import Latex from '../../img/LaTeX_logo.svg'
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJsSquare, FaLinux } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import { SiExpress, SiApache, SiMysql, SiPhp, SiFlask, SiNginx, SiDocker } from 'react-icons/si'
import ProjectModal from './Modal'
import { modalLog, modalPrevPort, modalValidation, modalCvGen } from './Modal/Data'
//import ProjectModal from './Modal'

const Projects = () => {

  const [modal, setModal] = useState(false);
  const [modalScreen, setModalScreen] = useState(0);

  const openModal = (n) => {
    setModal(true);
    setModalScreen(n);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#010606',
      borderRadius: '10px'
    },
  };

  Modal.setAppElement('#root');

  const afterModalOpen = () => {
    null;
  }

  const afterModalClose = () => {
    null;
  }

  const closeModal = () => {
    setModal(false);
    setModalScreen(0);
  }

  return (
    <>
      <ProjectsContainer id='projects'>
        <ProjectsWrapper>
          <Topline>Personal Projects</Topline>
          <ProjectsContent>
            <ProjectBtn >
              <ProjectsCard onClick={() => openModal(1)}>
                <ProjectsIcon src={Icon1} />
                <ProjectsH2>Log App</ProjectsH2>
                <ProjectsP><DiMongodb /><SiExpress /><FaReact /><FaNodeJs /></ProjectsP>
              </ProjectsCard>
            </ProjectBtn>
            <ProjectBtn >
              <ProjectsCard onClick={() => openModal(2)}>
                <ProjectsIcon src={Icon2} />
                <ProjectsH2>Previous portfolio</ProjectsH2>
                <ProjectsP><FaHtml5 /><FaCss3 /><FaJsSquare /></ProjectsP>
              </ProjectsCard>
            </ProjectBtn>
            <ProjectBtn>
              <ProjectsCard onClick={() => openModal(3)}>
                <ProjectsIcon src={Icon3} />
                <ProjectsH2>Validation Helper</ProjectsH2>
                <ProjectsP><FaLinux /><SiApache /><SiMysql /><SiPhp /></ProjectsP>
              </ProjectsCard>
            </ProjectBtn>
            <ProjectBtn>
              <ProjectsCard onClick={() => openModal(4)}>
                <ProjectsIcon src={Icon4} />
                <ProjectsH2>CV Generator</ProjectsH2>
                <ProjectsP><SiFlask /><SiNginx /><SiDocker /><img src={Latex} style={{height: 20, width: 50}} alt='latex logo'/></ProjectsP>
              </ProjectsCard>
            </ProjectBtn>
          </ProjectsContent>
        </ProjectsWrapper>


        {/*<ProjectsH1>Personal Projects</ProjectsH1>*/}
        <Modal id='themodal' isOpen={modal}
          onRequestClose={closeModal}
          style={customStyles}
          onAfterOpen={afterModalOpen}
          onAfterClose={afterModalClose}
          closeTimeoutMS={1000}
        >
          {modalScreen === 1 && 
            <ProjectModal {...modalLog} closeModal={closeModal} />
          }
          {modalScreen === 2 &&
            <ProjectModal {...modalPrevPort} closeModal={closeModal} />
          }
          {modalScreen === 3 &&
            <ProjectModal {...modalValidation} closeModal={closeModal} />
          }
          {modalScreen === 4 &&
            <ProjectModal {...modalCvGen} closeModal={closeModal} />
          }
          </Modal>
      </ProjectsContainer>
    </>
  )
}

export default Projects