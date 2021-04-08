import styled, { css } from "styled-components";

const Typography = props => {
  const { children, type } = props;

  switch (type) {
    case "h1":
      return <Heading1 {...props}>{children}</Heading1>;
    case "h2":
      return <Heading2 {...props}>{children}</Heading2>;
    case "h3":
      return <Heading3 {...props}>{children}</Heading3>;
    case "h4":
      return <Heading4 {...props}>{children}</Heading4>;
    case "h5":
      return <Heading5 {...props}>{children}</Heading5>;
    case "h6":
      return <Heading6 {...props}>{children}</Heading6>;
    default:
      return <Paragraph {...props}>{children}</Paragraph>;
  }
};

const sharedStyles = css`
  line-height: 1.5;

  ${({ theme, size, mBot, textAlign, fontWeight, capitalize, muted }) => css`
    ${capitalize && "text-transform: uppercase;"}
    ${size && `font-size: ${size};`}
    ${fontWeight && `font-weight: ${fontWeight};`}
    ${muted && `color: ${theme.colors.darkGrey};`}
    margin-bottom: ${mBot ? mBot : "1rem"};
    text-align: ${textAlign ? textAlign : "unset"};
  `}
`;

const Paragraph = styled.p`
  ${sharedStyles}
  line-height: 1.9;
`;

const Heading1 = styled.h1`
  font-size: 2rem;
  ${sharedStyles};
`;
const Heading2 = styled.h2`
  font-size: 1.75rem;
  ${sharedStyles};
`;
const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${sharedStyles};
`;
const Heading4 = styled.h4`
  font-size: 1.25rem;
  ${sharedStyles};
`;
const Heading5 = styled.h5`
  font-size: 1rem;
  ${sharedStyles};
`;
const Heading6 = styled.h6`
  font-size: 0.85rem;
  ${sharedStyles};
`;

export default Typography;
