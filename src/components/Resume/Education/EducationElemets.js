import styled from 'styled-components'

export const EducationWrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const EducationCard = styled.div`
  display: grid;
  grid-template-areas:
    "date title"
    "date description";
  grid-column-gap: 20px;
  grid-template-columns: 1fr 3fr;
  width: 60vw;
  min-width: 150px;
  background: #01bf71;
  border: 3px solid #01bf71;
  border-radius: 1px 20px 1px;
  padding: 10px;
`

export const EducationTitle = styled.h4`
  grid-area: title;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`

export const EducationDates = styled.div`
  grid-area: date;
  font-size: 18px;
  font-weight: normal;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`

export const EducationDescription = styled.p`
  grid-area: description;
  font-size: 16px;
  font-weight: normal;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`