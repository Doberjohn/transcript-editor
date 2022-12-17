import React from 'react';
import styled from "styled-components";

const Pause = ({src, onClick}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <PauseIcon src={src} onClick={onClick} alt="pause"/>;
};

const PauseIcon = styled.img`
  width: 60px;
  height: 60px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
  }
`

export default Pause;
