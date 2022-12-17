import React from 'react';
import styled from "styled-components";

const PageTemplate = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
  return <PageTemplateWrapper>{children}</PageTemplateWrapper>;
};

const PageTemplateWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 !important;
  position: fixed;
  bottom: 0;
`

export default PageTemplate;
