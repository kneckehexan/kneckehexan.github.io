import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  padding: 100px 0;
  min-height: 91vh;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  //width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 34px;
`

export const Topline = styled.div`
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const ProjectBtn = styled.a`
  text-decoration: none;
  color: #010606;
`

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const ProjectsContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  row-gap: 2rem;
  column-gap: 2%;
  justify-content: space-evenly;
`

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 3px solid #010606;
`

export const ProjectsH1 = styled.h1`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  color: #01bf71;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`