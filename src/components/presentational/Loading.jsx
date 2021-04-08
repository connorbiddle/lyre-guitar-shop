import styled, { css } from "styled-components";
import { Icon } from "./";
import { spin } from "../../style/animations";
import { atSize } from "../../style/mixins";

const Loading = ({ size, height, center, pageLoading }) => {
  return (
    <StyledLoading center={center} height={height} pageLoading={pageLoading}>
      <Icon icon="fas fa-spinner" size={size} />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  ${({ center }) =>
    center &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${({ height }) => height && `height: ${height};`}
  ${({ pageLoading }) =>
    pageLoading &&
    atSize(
      "lg",
      css`
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50% -50%);
      `
    )}

  i {
    ${spin()}
  }
`;

export default Loading;
