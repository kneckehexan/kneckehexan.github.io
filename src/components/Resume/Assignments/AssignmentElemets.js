import styled from 'styled-components'

export const AssignmentWrapper = styled.div`
  background: #f9f9f9;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`

export const AssignmentCard = styled.div`
  display: grid;
  grid-template-areas:
    "date title client"
    "date description description";
  grid-column-gap: 20px;
  grid-template-columns: 1fr 1.5fr 1.5fr;
  width: 60vw;
  min-width: 150px;
  background: #01bf71;
  border: 3px solid #01bf71;
  border-radius: 1px 20px 1px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "date title"
      "date client"
      "description description";
    grid-template-columns: 1fr 3fr;
    width: calc(100vw - 3rem);
  }
`

//export const AssignmentHead = styled.div`
//  grid-area: title;
//  margin-bottom: 12px;
//`

export const AssignmentTitle = styled.h4`
  grid-area: title;
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 2px;
  }
`

export const AssignmentClient = styled.p`
  font-size: 16px;
  font-weight: normal;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 2px;
  }
`

export const AssignmentDates = styled.div`
  grid-area: date;
  font-size: 18px;
  font-weight: normal;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const AssignmentDescription = styled.p`
  grid-area: description;
  font-size: 16px;
  font-weight: normal;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`