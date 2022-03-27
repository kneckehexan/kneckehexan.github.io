import React from 'react'
import { CertificateWrapper, CertificateCard, CertificateTitle, CertificateDates, CertificateLink } from './CertificateElemets'

// eslint-disable-next-line react/prop-types
const Certificate = ({certificateTitle, certificateDates, certificateLink, lightText}) => {
  return (
    <>
      <CertificateWrapper>
        <CertificateCard>
          <CertificateDates lightText={lightText}>{certificateDates}</CertificateDates>
          <CertificateTitle lightText={lightText}>{certificateTitle}</CertificateTitle>
          <CertificateLink href={certificateLink} target='_blank' rel='noreferrer noopener'>View Certificate</CertificateLink>
        </CertificateCard>
      </CertificateWrapper>
    </>
  )
}

export default Certificate