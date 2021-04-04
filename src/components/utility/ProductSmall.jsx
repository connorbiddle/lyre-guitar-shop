import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { Typography } from "../presentational";
import { lightShadow } from "../../style/mixins";
import { shorten } from "../../functions";

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
        {shorten(name, 8)}
      </Typography>
      <Typography mBot="0">{price.formatted_with_symbol}</Typography>
    </StyledProductSmall>
  );
};

const StyledProductSmall = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  img {
    margin-bottom: 1rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    ${lightShadow}
    opacity: 0;
    transition: opacity 300ms ease;
  }

  &:hover::before {
    opacity: 1;
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
