import styled, {keyframes} from 'styled-components'

export const ResumeContainer = styled.div`
  color: #010606;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  padding: 100px 0;
  min-height: 91vh;
`

export const ResumeWrapper = styled.div`
  display: flex;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  flex-direction: column;
`

export const ResumeTopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const ResumeSection = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`

export const ResumeSectionTitle = styled.h2`
  border-top: 3px solid #01bf71;
  text-transform: uppercase;
  font-size: 24px;
  cursor: pointer;
`

export const ResumeItems = styled.div`
  display: ${({vis}) => (vis ? 'none' : 'flex')};;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  animation-name: ${() => showResumeSection()};
  animation-duration: 0.5s;
`

const showResumeSection = () => keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`