import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import {FooterContainer, FooterWrapper, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
//import {FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLinks, FooterLink} from './FooterElements'
import {FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          {/*<FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Contact</FooterLinkTitle>
                <FooterLinks>
                  <FooterLink>Some text</FooterLink>
                  <FooterLink>Some other text</FooterLink>
                </FooterLinks>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>*/}
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>PT</SocialLogo>
              <WebsiteRights>PT &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='https://www.linkedin.com/in/philiptunbjer' target='_blank' rel='noreferrer noopener'><FaLinkedin /></SocialIconLink>
                <SocialIconLink href='https://github.com/kneckehexan/' target='_blank' rel='noreferrer noopener'><FaGithub /></SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer