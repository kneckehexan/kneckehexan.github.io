import React, {useState} from 'react'
import Video from '../../vid/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {

  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to me.</HeroH1>
        <HeroP>Me being Philip Tunbjer.</HeroP>
        <HeroBtnWrapper>
          <Button to='resume'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='false'
            dark='true'
            >
            Resumé {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection