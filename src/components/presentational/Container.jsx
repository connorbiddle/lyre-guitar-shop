import styled from "styled-components";

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

export default Container;
