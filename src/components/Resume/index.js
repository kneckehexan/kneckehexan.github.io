import React, {useState} from 'react'
import Education from './Education'
import { edu1, edu2, edu3, edu4, edu5, edu6 } from './Education/Data'
import Employment from './Employment'
import { emp1, emp2, emp3, emp4, emp5 } from './Employment/Data'
import Assignment from './Assignments'
import { ass1, ass2, ass3, ass4, ass5, ass6 } from './Assignments/Data'
import Certificate from './Certificates'
import { cer1, cer2, cer3, cer4, cer5, cer6, cer7, cer8, cer9, cer10, cer11 } from './Certificates/Data'
import {ResumeContainer, ResumeWrapper, ResumeTopLine, ResumeSection, ResumeSectionTitle, ResumeItems} from './ResumeElements'

const Resume = () => {

  const [showEdu, setShowEdu] = useState(true);
  const [showEmp, setShowEmp] = useState(true);
  const [showAss, setShowAss] = useState(true);
  const [showCer, setShowCer] = useState(true);

  const toggleSection = (id) => {
    switch(id) {
      case 'resume-edu':
        setShowEdu(!showEdu)
        break;
      case 'resume-emp':
        setShowEmp(!showEmp);
        break;
      case 'resume-ass':
        setShowAss(!showAss);
        break;
      case 'resume-cer':
        setShowCer(!showCer);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <ResumeContainer lightBg={true} id='resume'>
        <ResumeWrapper>
          <ResumeTopLine>Resumé</ResumeTopLine>
          <ResumeSection>
            <ResumeSectionTitle onClick={() => toggleSection('resume-edu')}>Education</ResumeSectionTitle>
            <ResumeItems id='resume-edu' vis={showEdu}>
              <Education {...edu1}/>
              <Education {...edu2}/>
              <Education {...edu3}/>
              <Education {...edu4}/>
              <Education {...edu5}/>
              <Education {...edu6}/>
            </ResumeItems>
          </ResumeSection>
          <ResumeSection>
            <ResumeSectionTitle onClick={() => toggleSection('resume-emp')}>Employment</ResumeSectionTitle>
            <ResumeItems id='resume-emp' vis={showEmp} >
              <Employment {...emp1}/>
              <Employment {...emp2}/>
              <Employment {...emp3}/>
              <Employment {...emp4}/>
              <Employment {...emp5}/>
            </ResumeItems>
          </ResumeSection>
          <ResumeSection>
            <ResumeSectionTitle onClick={() => toggleSection('resume-ass')}>Assignments</ResumeSectionTitle>
            <ResumeItems id='resume-ass' vis={showAss}>
              <Assignment {...ass6}/>
              <Assignment {...ass5}/>
              <Assignment {...ass4}/>
              <Assignment {...ass3}/>
              <Assignment {...ass2}/>
              <Assignment {...ass1}/>
            </ResumeItems>
          </ResumeSection>
          <ResumeSection>
            <ResumeSectionTitle onClick={() => toggleSection('resume-cer')}>Certificates</ResumeSectionTitle>
            <ResumeItems id='resume-cer' vis={showCer}>
              <Certificate {...cer1}/>
              <Certificate {...cer2}/>
              <Certificate {...cer3}/>
              <Certificate {...cer4}/>
              <Certificate {...cer5}/>
              <Certificate {...cer6}/>
              <Certificate {...cer7}/>
              <Certificate {...cer8}/>
              <Certificate {...cer9}/>
              <Certificate {...cer10}/>
              <Certificate {...cer11}/>
            </ResumeItems>
          </ResumeSection>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  )
}

export default Resume