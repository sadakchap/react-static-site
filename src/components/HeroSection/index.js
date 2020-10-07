import React, { useState } from 'react';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';


const HeroSection = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => setHover(!hover)
    
    return (
      <HeroContainer id="home">
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking made easy</HeroH1>
          <HeroP>
            Sign up for a new account todat and receive $250 in credit towards
            your next payment
          </HeroP>

          <HeroBtnWrapper onMouseEnter={onHover} onMouseLeave={onHover}>
            <Button to="signup" primary="true" dark="true">
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}{" "}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    );
}

export default HeroSection
