import styled from 'styled-components'
//import {Link as LinkR} from 'react-router-dom'

export const ProjectsContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /*background: #010606;*/
  background: #f9f9f9;
  padding-bottom: 20px;
`

export const ProjectsWrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: auto;
    padding: 0 20px;
  }
`

export const ProjectBtn = styled.a`
  text-decoration: none;
  /*color: #010606;*/
  color: #f9f9f9;
`

export const ProjectsCard = styled.div`
  /*background: #fff;*/
  background: #010606;
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
`

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  /*color: #fff;*/
  color: #010606;
  margin-bottom: 64px;

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