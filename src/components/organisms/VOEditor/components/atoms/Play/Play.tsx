import React from 'react';
import styled from "styled-components";

const Play = ({src, onClick}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return <PlayIcon src={src} onClick={onClick} alt="play"/>;
};

const PlayIcon = styled.img`
  width: 60px;
  height: 60px;
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
  }
`

export default Play;
