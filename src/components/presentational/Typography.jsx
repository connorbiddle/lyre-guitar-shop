import React from "react";
import styled, { css } from "styled-components";

const Typography = props => {
  const { children, type } = props;
  const p = props;

  switch (type) {
    case "h1":
      return <Heading1 {...p}>{children}</Heading1>;
    case "h2":
      return <Heading2 {...p}>{children}</Heading2>;
    case "h3":
      return <Heading3 {...p}>{children}</Heading3>;
    case "h4":
      return <Heading4 {...p}>{children}</Heading4>;
    case "h5":
      return <Heading5 {...p}>{children}</Heading5>;
    case "h6":
      return <Heading6 {...p}>{children}</Heading6>;
    default:
      return <Paragraph {...p}>{children}</Paragraph>;
  }
};

const sharedStyles = css`
  ${({ size, mBot, textAlign, capitalize }) => css`
    ${capitalize && "text-transform: uppercase;"}
    ${size && `font-size: ${size};`}
    margin-bottom: ${mBot ? mBot : "1rem"};
    text-align: ${textAlign ? textAlign : "unset"};
  `}
`;

const Paragraph = styled.p`
  ${sharedStyles}
`;

const Heading1 = styled.h1`
  ${sharedStyles};
`;
const Heading2 = styled.h2`
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
  ${sharedStyles};
`;
const Heading6 = styled.h6`
  ${sharedStyles};
`;

export default Typography;
