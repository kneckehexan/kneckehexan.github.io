import React from 'react'
import {ResumeContainer, ResumeWrapper, ResumeTopLine, ResumeSection, ResumeBtn} from './ResumeElements'
import { ButtonA } from '../ButtonElements'
import pdfcv from '../../files/PhilipTunbjer_CV_ENG_short.pdf'

const Resume = () => {

  return (
    <>
      <ResumeContainer lightBg={true} id='resume'>
        <ResumeWrapper>
          <ResumeTopLine>Resumé</ResumeTopLine>
          <ResumeSection>
          <ResumeBtn>
            <ButtonA href="https://cv.tunbjer.com" primary={false} big={true} dark={true} > Visit CV site</ButtonA>
          </ResumeBtn>
          <ResumeBtn>
            <ButtonA download='Philip_Tunbjer_CV.pdf' href={pdfcv} primary={false} big={true} dark={true} >Download PDF</ButtonA>
          </ResumeBtn>
          </ResumeSection>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  )
}

export default Resume
