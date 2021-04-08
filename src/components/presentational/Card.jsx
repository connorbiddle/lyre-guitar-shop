import styled, { css } from "styled-components";
import { lightShadow } from "../../style/mixins";

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 1.5rem;

  ${({ hoverable }) =>
    hoverable &&
    css`
      cursor: pointer;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        ${lightShadow()}
        opacity: 0;
        transition: opacity 300ms ease;
      }

      &:hover::before {
        opacity: 1;
      }
    `}
`;

export default Card;
