import styled from 'styled-components';
import signUpBg from "../../images/home-bg.jpg";
import {Link} from "react-router-dom";

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled.img`
  display: flex;
  height: 25px;
  width: 93px;
  align-items: center;
  justify-content: center;
  //margin-left: 24px;
  cursor: pointer;
`;

export const SIMContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c0c0c;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const SIMBackground = styled.div`
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

export const SIMContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  z-index: 3;
`;

export const SIMForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 660px;
  background-color: #000;
  color: #fff;
  opacity: 0.9;
`;

export const SIMLabel = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 30px;
  color: #e50914;
  margin-bottom: 40px;
`;

export const SIMInput = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const SIMButton = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
export const SIMLink = styled(Link)`
  font-size: 14px;  
  text-decoration: none;
  color: #fff;
  opacity: 0.5;
`;