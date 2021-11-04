import React from 'react';
import {BestBtn, BestText, BestRight, BestImage, BestLeft, BestTitle, BestContainer} from "./BestSyle";
import image from '../../images/home-tv.jpg'

const Best = () => {
  return (
    <BestContainer id='#startNow'>
      <BestLeft>
        <BestTitle>Download your shows<br/>
        to watch offline.</BestTitle>
        <BestText>Save your favourites easily and always have<br/>
        something to watch.</BestText>
        <BestBtn to='/signup'>Start Now</BestBtn>
      </BestLeft>
      <BestRight>
        <BestImage src={image}/>
      </BestRight>
    </BestContainer>
  );
};

export default Best;