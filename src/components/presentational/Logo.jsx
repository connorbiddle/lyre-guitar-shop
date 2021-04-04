import styled from "styled-components";
import LogoDark from "../../assets/logo-dark.svg";
import LogoLight from "../../assets/logo-light.svg";

const Logo = ({ className, light, width }) => {
  return (
    <StyledLogo
      className={className}
      width={width}
      src={light ? LogoLight : LogoDark}
      alt="Lyre"
    />
  );
};

const StyledLogo = styled.img`
  min-width: 2rem;
  width: ${({ width }) => width && width};
`;

export default Logo;
