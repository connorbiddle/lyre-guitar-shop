import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  background-color: #fff;
  border: none;
  padding: 0.65em 1.5em;
  font-size: ${({ large }) => (large ? "1.2rem" : "1rem")};
  font-weight: 700;
  border-radius: 3px;
  text-transform: uppercase;
`;

export default Button;
