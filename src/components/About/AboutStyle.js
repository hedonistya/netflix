import styled from "styled-components";
import signUpBg from '../../images/about-bg.jpg';
import {Link as LinkRouter} from 'react-router-dom';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 0 30px;
  margin-bottom: 100px;
  //position: relative;
  //z-index: 1;
`;

export const AboutBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
`;

export const ImageBackground = styled.div`
  width: 100%;
  height: 100%;
  background: url(${signUpBg}) top left / cover no-repeat;
`;

export const AboutContent = styled.div`
  display: flex;
  //flex-direction: column;
  align-items: center;
  max-width: 1200px;
  //position: absolute;
  //padding: 8px 24px;
  //z-index: 3;
  margin-top: 80px;
`;

// export const AboutH1 = styled.h1`
//   color: #fff;
//   text-align: center;
//   font-size: 48px;
//
//   @media screen and (max-width: 768px){
//     font-size: 40px;
//   };
//
//   @media screen and (max-width: 480px){
//     font-size: 32px;
//   };
// `;

// export const AboutP = styled.p`
//   color: #46f51c;
//   text-align: center;
//   max-width: 600px;
//   font-size: 24px;
//   margin-top: 24px;
//
//   @media screen and (max-width: 768px) {
//     font-size: 24px;
//   };
//
//   @media screen and (max-width: 480px) {
//     font-size: 18px;
//   };
// `;

export const AboutBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const AboutBtn = styled(LinkRouter)`
  color: #fff;
  background: #e50914;
  border-radius: 5px;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  margin-top: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AboutPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 335px;
  height: 610px;
  background: #0c0c0c;
  border-radius: 25px;
  margin-left: 40px;
  align-items: center;
`;
export const PriceP = styled.p`
  color: white;
  text-align: center;
  margin-top: 5px;
`;
export const PriceLi = styled.li`
  margin-bottom: 20px;
  color: white;
`;
export const ConstP = styled.p`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  margin-top: 30px;
`;
export const PriceH2 = styled.h2`
  color: white;
  margin-top: 40px;
  font-size: 21px;
`;
export const PriceUl = styled.ul`
  list-style: none;
  margin-top: 30px;
`;
export const AboutH1 = styled.h1`
  color: #000;
  margin-top: 100px;
  font-size: 30px;
`;

export const AboutP = styled.p`
  color: #0c0c0c;
  font-size: 21px;
  margin-top: 20px;
  text-align: center;
`;

