import styled from "styled-components";

export const MainLink = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #e50914;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  background: #000;
  @media (max-width: 1000px) {
    margin-left: 30px;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Cardd = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const CardTitle = styled.p`
  display: flex;
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-bottom: 10px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
`;

export const CardImage = styled.img`
  display: flex;
  border: 0;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
  padding: 0;
  margin: 0;
`;


export const CardSubtitle = styled.p`
  display: flex;
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  transition: 0.3s ease-in-out;
`;

export const CardText = styled.p`
  display: flex;
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  line-height: normal;
`;

export const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
  transition: 0.3s ease-in-out;
`;

export const CardPlayer = styled.p`
  display: flex;
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin: 0;
`;

export const Player = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0 20px;
`;
export const PlayerButton = styled.button`
  background-color: #e50914;
  width: 84px;
  white-space: nowrap;
  height: fit-content;
  color: #fff;
  border: 0;
  font-size: 16px;
  border-radius: 5px;
  padding: 10px 22px;
  cursor: pointer;
  text-decoration: none;


  &:hover{
    background: #ff2430;
  }
`;
export const PlayerVideo = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;
export const PlayerMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 300px;
  background: #0c0c0c;
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin: 10px;
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  opacity: 0.3;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  margin: 0 20px;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;

  video {
    height: 100%;
    width: 100%;
  }
`;



