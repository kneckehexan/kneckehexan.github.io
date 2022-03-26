import React from 'react'
import { EmploymentWrapper, EmploymentCard, EmploymentTitle, EmploymentDates, EmploymentDescription } from './EmploymentElemets'

// eslint-disable-next-line react/prop-types
const Employment = ({employmentTitle, employmentDates, employmentDescription, lightText}) => {
  return (
    <>
      <EmploymentWrapper>
        <EmploymentCard>
          <EmploymentDates lightText={lightText}>{employmentDates}</EmploymentDates>
          <EmploymentTitle lightText={lightText}>{employmentTitle}</EmploymentTitle>
          <EmploymentDescription lightText={lightText}>{employmentDescription}</EmploymentDescription>
        </EmploymentCard>
      </EmploymentWrapper>
    </>
  )
}

export default Employment