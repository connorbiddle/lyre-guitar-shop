import styled from "styled-components";
import { Container } from "../presentational";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>This is the footer. Lorem ipsum dolor sit amet.</Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin-top: 6rem;
  padding: 2.5rem 0;
  text-align: center;
`;

export default Footer;
