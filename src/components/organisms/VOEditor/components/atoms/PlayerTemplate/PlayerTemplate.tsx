import React from 'react';
import styled from "styled-components";

const PlayerTemplate = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <PlayerTemplateWrapper>{children}</PlayerTemplateWrapper>;
};

const PlayerTemplateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
  background-color: var(--playerBackground);
  overflow: auto;
`

export default PlayerTemplate;
