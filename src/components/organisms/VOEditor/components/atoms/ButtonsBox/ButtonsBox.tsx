import React from 'react';
import styled from "styled-components";

const ButtonsBox = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <ButtonsBoxWrapper>{children}</ButtonsBoxWrapper>;
};

const ButtonsBoxWrapper = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  place-items: center;
`

export default ButtonsBox;