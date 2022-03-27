import React from 'react'
import Video from '../../vid/video-h264-medium.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroContact, HeroContactItem } from './HeroElements'
//import {Button} from '../ButtonElements'
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa'

const HeroSection = () => {

  //const [hover, setHover] = useState(false)

  //const onHover = () => {
  //  setHover(!hover)
  //}

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Philip Tunbjer</HeroH1>
        <HeroP>Engineer | Project Manager | Likes Programming</HeroP>
        <HeroContact>
          <HeroContactItem href='mailto:philip.tunbjer@gmail.com' target='_blank' rel='noreferrer noopener'><FaEnvelope/></HeroContactItem>
          <HeroContactItem href='https://www.linkedin.com/in/philiptunbjer' target='_blank' rel='noreferrer noopener'><FaLinkedin/></HeroContactItem>
          <HeroContactItem href='https://github.com/kneckehexan/' target='_blank' rel='noreferrer noopener'><FaGithub/></HeroContactItem>
        </HeroContact>
        {/*<HeroBtnWrapper>
          <Button to='resume'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='false'
            dark='true'
            >
            Resumé {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>*/}
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection