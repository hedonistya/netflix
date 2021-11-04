import React from 'react';
import {EmailContainer, EmailInput, EmailMain, EmailTitle, EmailBtn,} from "./EmailStyled";

const Email = () => {
  return (
    <EmailContainer>
      <EmailTitle>Enter your email</EmailTitle>
      <EmailMain>
        <EmailInput type='email' placeholder='example@mail.com'/>
        <EmailBtn to='/signup'>Send</EmailBtn>
      </EmailMain>
    </EmailContainer>
  );
};

export default Email;