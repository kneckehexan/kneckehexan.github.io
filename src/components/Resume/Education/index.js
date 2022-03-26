import React from 'react'
import { EducationWrapper, EducationCard, EducationTitle, EducationDates, EducationDescription } from './EducationElemets'

// eslint-disable-next-line react/prop-types
const Education = ({educationTitle, educationDates, educationDescription, lightText}) => {
  return (
    <>
      <EducationWrapper>
        <EducationCard>
          <EducationDates lightText={lightText}>{educationDates}</EducationDates>
          <EducationTitle lightText={lightText}>{educationTitle}</EducationTitle>
          <EducationDescription lightText={lightText}>{educationDescription}</EducationDescription>
        </EducationCard>
      </EducationWrapper>
    </>
  )
}

export default Education