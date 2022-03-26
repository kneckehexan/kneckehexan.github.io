import React from 'react'
import { AssignmentWrapper, AssignmentCard, AssignmentHead, AssignmentTitle, AssignmentDates, AssignmentDescription, AssignmentClient } from './AssignmentElemets'

// eslint-disable-next-line react/prop-types
const Assignment = ({assignmentTitle, assignmentClient, assignmentDates, assignmentDescription, lightText}) => {
  return (
    <>
      <AssignmentWrapper>
        <AssignmentCard>
          <AssignmentDates lightText={lightText}>{assignmentDates}</AssignmentDates>
          <AssignmentHead>
            <AssignmentTitle lightText={lightText}>{assignmentTitle}</AssignmentTitle>
            <AssignmentClient>{assignmentClient}</AssignmentClient>
          </AssignmentHead>
          <AssignmentDescription lightText={lightText}>{assignmentDescription}</AssignmentDescription>
        </AssignmentCard>
      </AssignmentWrapper>
    </>
  )
}

export default Assignment