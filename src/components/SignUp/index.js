import React from "react";
import {
  SignUpContainer,
  SignUpBackground,
  ImageBackground,
  SignUpContent,
  SignUpH1,
  SignUpP,
  SignUpBtnWrapper,
  SignUpBtn,
  SignUpSup
} from "./SignUpStyle";

const SignUp = () => {
  return (
    <SignUpContainer id='#signup'>
      <SignUpBackground>
        <ImageBackground/>
      </SignUpBackground>
      <SignUpContent>
        <SignUpH1>Watch thousands of TV shows and movies.</SignUpH1>
        <SignUpP>HBO Max<SignUpSup>TM</SignUpSup>, SHOWTIME, CINEMAX and STARZ available as add-ons.</SignUpP>
        <SignUpBtnWrapper>
          <SignUpBtn to='/signup'>Get Started</SignUpBtn>
        </SignUpBtnWrapper>
      </SignUpContent>
    </SignUpContainer>
  )
}

export default SignUp;