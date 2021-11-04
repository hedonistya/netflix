import styled from "styled-components";
import {Link as LinkRouter} from 'react-router-dom';

export const BestContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #000;
`;
export const BestLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
`;
export const BestTitle = styled.h1`
  color: #e50914;
  margin-top: 30px;
  font-size: 35px;
  line-height: 1.5;
`;
export const BestText = styled.p`
  color: white;
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.5;
`;
export const BestBtn = styled(LinkRouter)`
  color: #fff;
  background: #e50914;
  text-align: center;
  border-radius: 5px;
  width: 250px;
  white-space: nowrap;
  padding: 16px 64px;
  font-size: 16px;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  margin-top: 80px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #ff2430;
  }
`;
export const BestRight = styled.div`
  display: flex;
  margin-right: 200px;
`;
export const BestImage = styled.img`
  display: flex;
  
`;