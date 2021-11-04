import React from "react";
import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutP,
  AboutBtn,
  ConstP,
  PriceP,
  AboutPrice,
  PriceLi,
  PriceUl,
  PriceH2
} from "./AboutStyle";

const About = () => {

  return (
    <AboutContainer id='#price'>
      <AboutH1>Pricing</AboutH1>
      <AboutP>Most calendars are designed for teams.<br/>
        Slate is designed for freelancers</AboutP>
      <AboutContent>
        <AboutPrice>
          <PriceH2>Free</PriceH2>
          <PriceP>Organize across all<br/>
            apps by hand</PriceP>
          <ConstP>5$</ConstP>
          <PriceUl>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
          </PriceUl>
          <AboutBtn to='/signup'>Order Now</AboutBtn>
        </AboutPrice>
        <AboutPrice>
          <PriceH2>Standard</PriceH2>
          <PriceP>Organize across all<br/>
            apps by hand</PriceP>
          <ConstP>9.99$</ConstP>
          <PriceUl>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
          </PriceUl>
          <AboutBtn to='/signup'>Order Now</AboutBtn>
        </AboutPrice>
        <AboutPrice>
          <PriceH2>Premium</PriceH2>
          <PriceP>Organize across all<br/>
            apps by hand</PriceP>
          <ConstP>12.99$</ConstP>
          <PriceUl>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
            <PriceLi>Pricing Feature</PriceLi>
          </PriceUl>
          <AboutBtn to='/signup'>Order Now</AboutBtn>
        </AboutPrice>
      </AboutContent>
    </AboutContainer>
  )
}

export default About;