import styled from 'styled-components'
import {MdArrowForward, MdKeyboardArrowRight} from 'react-icons/md'

export const ModalContainer = styled.div`
  color: #fff;
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
  border-radius: 10px;
`

export const ModalWrapper= styled.div`
  display: grid;
  z-index: 10;
  padding: 24px 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin-right: 0;
    transform: translate(0%, 0%);
    padding: 0 12px;
  }
`

export const ModalRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  //@media screen and (max-width: 768px) {
  //  grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  //}
`

export const ModalCol1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const ModalCol2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`

export const ModalTextWrap = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const ModalTopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const ModalHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const ModalSubtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`


export const ModalBtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ModalImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const ModalImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 10px;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`
