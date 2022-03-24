import React from 'react'

const Resume = () => {
  return (
    <>
      <ResumeContainer>
        <ResumeWrapper>
          <ResumeH1>Resumé</ResumeH1>
          <ResumeContent>
            <Education />
            <Employment />
            <Assignments />
            <Certificates />
            <Courses />
          </ResumeContent>
        </ResumeWrapper>
      </ResumeContainer>
    </>
  )
}

export default Resume