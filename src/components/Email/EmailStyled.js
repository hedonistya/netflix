import styled from "styled-components";
import {Link as RouterLink} from 'react-router-dom';

export const EmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 100%;
`;
export const EmailTitle = styled.h1`
  color: #000;
  font-size: 40px;
  margin-top: 20px;
`;
export const EmailMain = styled.div`
  display: flex;
  align-items: center;
  //background-color: #fff;
  margin-top: 30px;
  margin-bottom: 60px;
`;
export const EmailInput = styled.input`
  display: flex;
  width: 400px;
  color: white;
  font-size: 25px;
  padding: 10px 20px;
  background: #0c0c0c;
  border: none;
  border-radius: 25px 0 0 25px;
  outline: none;
`;
export const EmailBtn = styled(RouterLink)`
  display: flex;
  align-items: center;
  background: #e50914;
  color: white;
  text-decoration: none;
  padding: 10px 20px 10px 12px;
  font-size: 25px;
  align-items: center;
  border-radius: 0 25px 25px 0;
`;