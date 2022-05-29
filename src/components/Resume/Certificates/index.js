import React from 'react'
import { CertificateWrapper, CertificateCard, CertificateTitle, CertificateLink } from './CertificateElemets'

// eslint-disable-next-line react/prop-types
const Certificate = ({certificateTitle, certificateLink, lightText}) => {
  return (
    <>
      <CertificateWrapper>
        <CertificateCard>
          <CertificateTitle lightText={lightText}>{certificateTitle}</CertificateTitle>
          <CertificateLink href={certificateLink} target='_blank' rel='noreferrer noopener'>View Certificate</CertificateLink>
        </CertificateCard>
      </CertificateWrapper>
    </>
  )
}

export default Certificate