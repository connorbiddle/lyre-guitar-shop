import React from "react";
import styled from "styled-components";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";

const Logo = ({ className, light }) => {
  return (
    <StyledLogo
      className={className}
      src={light ? LogoLight : LogoDark}
      alt="Lyre"
    />
  );
};

const StyledLogo = styled.img`
  min-width: 2rem;
`;

export default Logo;
