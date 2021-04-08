import styled from "styled-components";

const Button = props => {
  if (props.center)
    return (
      <Center>
        <StyledButton {...props}>{props.children}</StyledButton>
      </Center>
    );

  return <StyledButton {...props}>{props.children}</StyledButton>;
};

const StyledButton = styled.button`
  display: inline-block;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ large }) => (large ? "1.2rem" : "1rem")};
  padding: 0.7em 1.5em;
  font-weight: 700;
  line-height: 1.5;
  border-radius: 3px;
  text-transform: uppercase;

  &:disabled {
    opacity: 0.7;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Button;
