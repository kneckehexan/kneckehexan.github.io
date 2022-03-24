import React from 'react'
import {ModalContainer, ModalWrapper, ModalRow, ModalCol1, ModalCol2, ModalTextWrap, ModalTopLine, ModalHeading, ModalSubtitle, ModalImgWrap, ModalImg, ModalBtnWrap } from './ModalElements'
import { ButtonA } from '../../ButtonElements'

// eslint-disable-next-line react/prop-types
const ProjectModal = ({img, alt, lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, primary, dark, href}) => {

  return (
    <>
      <ModalContainer lightBg={lightBg} id={id}>
        <ModalWrapper>
          <ModalRow imgStart={imgStart}>
            <ModalCol1>
              <ModalTextWrap>
                <ModalTopLine>{topLine}</ModalTopLine>
                <ModalHeading lightText={lightText}>{headLine}</ModalHeading>
                <ModalSubtitle darkText={darkText}>{description}</ModalSubtitle>
                <ModalBtnWrap>
                  { buttonLabel !== '' ? (
                    <ButtonA
                      href={href}
                      target='_blank'
                      rel='noreferrer noopener'
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact={true}
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}>
                      {buttonLabel}
                    </ButtonA>
                  ) : null }
                </ModalBtnWrap>
              </ModalTextWrap>
            </ModalCol1>
            <ModalCol2>
              <ModalImgWrap>
                <ModalImg src={img} alt={alt} />
              </ModalImgWrap>
            </ModalCol2>
          </ModalRow>
        </ModalWrapper>
      </ModalContainer>
    </>
  )
}

export default ProjectModal