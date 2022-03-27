import React from 'react'
import { AssignmentWrapper, AssignmentCard, AssignmentTitle, AssignmentDates, AssignmentDescription, AssignmentClient } from './AssignmentElemets'

// eslint-disable-next-line react/prop-types
const Assignment = ({assignmentTitle, assignmentClient, assignmentDates, assignmentDescription, lightText}) => {
  return (
    <>
      <AssignmentWrapper>
        <AssignmentCard>
          <AssignmentDates lightText={lightText}>{assignmentDates}</AssignmentDates>
          <AssignmentTitle lightText={lightText}>{assignmentTitle}</AssignmentTitle>
          <AssignmentClient>{assignmentClient}</AssignmentClient>
          <AssignmentDescription lightText={lightText}>{assignmentDescription}</AssignmentDescription>
        </AssignmentCard>
      </AssignmentWrapper>
    </>
  )
}

export default Assignment