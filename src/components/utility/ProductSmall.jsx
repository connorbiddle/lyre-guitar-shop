import { Link } from "react-router-dom";
import styled from "styled-components";
import { Card, Typography } from "../presentational";
import { shorten } from "../../functions";

const ProductSmall = props => {
  const { name, media, price, permalink } = props.product;

  return (
    <StyledProductSmall {...props} to={`/product/${permalink}`}>
      <Card hoverable className="product-small-contents">
        <img src={media.source} alt={name} />
        <Typography type="h3" size="1.25rem">
          {shorten(name, 8)}
        </Typography>
        <Typography mBot="0">{price.formatted_with_symbol}</Typography>
      </Card>
    </StyledProductSmall>
  );
};

const StyledProductSmall = styled(Link)`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;

  .product-small-contents {
    height: 100%;
  }

  img {
    margin-bottom: 1rem;
  }
`;

export default ProductSmall;
