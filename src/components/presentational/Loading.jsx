import styled, { css } from "styled-components";
import { Icon } from "./";
import { spin } from "../../style/animations";

const Loading = ({ size, height, center }) => {
  return (
    <StyledLoading center={center} height={height}>
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

  > i {
    ${spin()}
  }
`;

export default Loading;
