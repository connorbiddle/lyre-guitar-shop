import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Typography } from "../presentational";

const ProductSmall = props => {
  const { name, media, price, inventory, permalink } = props.product;

  const unavailable = inventory.managed && !inventory.available;

  return (
    <StyledProductSmall
      {...props}
      to={`/product/${permalink}`}
      unavailable={unavailable}
    >
      <img src={media.source} alt={name} />
      <Typography type="h3" size="1.25rem">
        {name}
      </Typography>
      <Typography mBot="0">{price.formatted_with_symbol}</Typography>
    </StyledProductSmall>
  );
};

const StyledProductSmall = styled(Link)`
  position: relative;
  padding: 1rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.125);
  text-align: center;

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  img {
    margin-bottom: 1rem;
  }

  ${({ unavailable }) =>
    unavailable &&
    css`
      opacity: 0.75;

      &::after {
        content: "Out of stock";
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: #ca3838;
        color: #fff;
      }
    `}
`;

export default ProductSmall;
