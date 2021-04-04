import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { atSize } from "../../style/mixins";
import { Container, Icon, Logo, Typography } from "../presentational";

const Footer = () => {
  const Section1 = () => (
    <div className="footer-section">
      <Link to="/" className="footer-logo">
        <Logo light width="150px" />
      </Link>
      <div className="footer-social">
        <a href="/" target="_blank">
          <Icon icon="fab fa-facebook" />
        </a>
        <a href="/" target="_blank">
          <Icon icon="fab fa-twitter" />
        </a>
        <a href="/" target="_blank">
          <Icon icon="fab fa-youtube" />
        </a>
        <a href="/" target="_blank">
          <Icon icon="fab fa-instagram" />
        </a>
      </div>
    </div>
  );

  const Section2 = () => (
    <div className="footer-section">
      <Typography type="h2" mBot="0.25rem" size="1.5rem" capitalize>
        Opening Times
      </Typography>
      <Typography mBot="0">Monday - Sunday</Typography>
      <Typography mBot="0">9am - 5pm</Typography>
    </div>
  );

  const Section3 = () => (
    <div className="footer-section">
      <Typography type="h2" mBot="0.25rem" size="1.5rem" capitalize>
        Contact Us
      </Typography>
      <Typography mBot="0">
        <a href="mailto:fake@email.com">hello@lyre.com</a>
      </Typography>
      <Typography mBot="0">
        <a href="tel:01234 567 890">01234 567 890</a>
      </Typography>
    </div>
  );

  return (
    <StyledFooter>
      <Container>
        <div className="footer-contents">
          <Section1 />
          <Section2 />
          <Section3 />
        </div>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  margin-top: auto;
  padding: 3rem 0;
  text-align: center;

  .footer-contents {
    margin: -1rem;

    ${atSize(
      "lg",
      css`
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
      `
    )}
  }

  .footer-logo {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
    &:last-child {
      margin-bottom: 0;
    }

    ${atSize(
      "lg",
      css`
        display: block;
        margin: 1rem;
      `
    )}
    a {
      color: inherit;
      text-decoration: none;
    }
  }

  .footer-social {
    display: flex;
    align-items: center;

    a {
      font-size: 1.5rem;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default Footer;
