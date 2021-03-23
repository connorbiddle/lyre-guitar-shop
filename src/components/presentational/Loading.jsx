import styled from "styled-components";
import { Icon } from "./";
import { spin } from "../../style/animations";

const Loading = ({ size }) => {
  return (
    <StyledLoading>
      <Icon icon="fas fa-spinner" size={size} />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  ${spin()}
`;

export default Loading;
