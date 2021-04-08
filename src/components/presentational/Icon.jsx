import styled from "styled-components";

const Icon = ({ icon, badge, size, onClick }) => {
  let iconClass = icon;
  if (size) iconClass += ` fa-${size}`;

  return onClick ? (
    <StyledIconButton onClick={onClick}>
      <i className={iconClass} />
      {badge && <span className="icon-badge">{badge}</span>}
    </StyledIconButton>
  ) : (
    <StyledIconButton as="span">
      <i className={iconClass} />
      {badge && <span className="icon-badge">{badge}</span>}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  color: inherit;
  background: none;
  border: none;
  position: relative;

  .icon-badge {
    position: absolute;
    top: -0.75rem;
    right: -0.75rem;
  }
`;

export default Icon;
