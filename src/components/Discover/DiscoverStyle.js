import styled from "styled-components";
import DiscoverBg from '../../images/about-bg.jpg';
import {Link as LinkRouter} from 'react-router-dom';

export const DiscoverContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const DiscoverBackground = styled.div`
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
  background: url(${DiscoverBg}) top;
  background-size: cover;
`;

export const DiscoverContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  z-index: 3;
`;

export const DiscoverH1 = styled.h1`
  color: #3e7b91;
  text-align: center;
  font-size: 48px;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  };

  @media screen and (max-width: 480px) {
    font-size: 32px;
  };
`;

export const DiscoverP = styled.p`
  color: #5ecb4e;
  text-align: center;
  max-width: 600px;
  font-size: 24px;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  };

  @media screen and (max-width: 480px) {
    font-size: 18px;
  };
`;

export const DiscoverBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const DiscoverBtn = styled(LinkRouter)`
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
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #ff2430;
  }
`;
