import React from "react";
import styled from "styled-components";

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default Container;
