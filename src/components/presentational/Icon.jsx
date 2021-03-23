import React from "react";
import styled from "styled-components";

const Icon = ({ icon, size, onClick }) => {
  let iconClass = icon;
  if (size) iconClass += ` fa-${size}`;

  return onClick ? (
    <StyledIconButton onClick={onClick}>
      <i className={iconClass} />
    </StyledIconButton>
  ) : (
    <i className={iconClass} />
  );
};

const StyledIconButton = styled.button`
  color: inherit;
  background: none;
  border: none;
`;

export default Icon;
