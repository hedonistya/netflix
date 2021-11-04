import React from "react";
import {
  DiscoverContainer,
  DiscoverBackground,
  ImageBackground,
  DiscoverContent,
  DiscoverH1,
  DiscoverP,
  DiscoverBtnWrapper,
  DiscoverBtn,
} from "./DiscoverStyle";

const Discover = () => {
  return (
    <DiscoverContainer id='#discover'>
      <DiscoverBackground>
        <ImageBackground/>
      </DiscoverBackground>
      <DiscoverContent>
        <DiscoverH1>Great Entertainment</DiscoverH1>
        <DiscoverP>Watch The Grand Tour, award-winning Amazon Originals such as The Man in the High Castle and Mozart in
          the Jungle, as well as popular movies and TV shows, with all titles available to download.</DiscoverP>
        <DiscoverBtnWrapper>
          <DiscoverBtn to='/signup'>Get Started</DiscoverBtn>
        </DiscoverBtnWrapper>
      </DiscoverContent>
    </DiscoverContainer>
  )
}

export default Discover;