import { useState } from "react";
import styled, { css } from "styled-components";
import { BrandFilter, ProductSmall } from "./";
import { atSize } from "../../style/mixins";
import { Typography } from "../presentational";

const ProductList = ({ products }) => {
  const [shownProducts, setShownProducts] = useState(products.data);

  const handleFilterChange = newProducts => setShownProducts(newProducts);

  const NoProductsFound = () => (
    <div>
      <Typography>No products found!</Typography>
    </div>
  );

  return (
    <StyledProductList>
      <BrandFilter
        className="list-filter"
        products={products.data}
        onChange={handleFilterChange}
      />
      {shownProducts.length > 0 ? (
        <div className="product-items">
          {shownProducts.map(product => (
            <ProductSmall
              key={product.id}
              product={product}
              className="listed-product"
            />
          ))}
          <div className="filler" />
          <div className="filler" />
        </div>
      ) : (
        <NoProductsFound />
      )}
    </StyledProductList>
  );
};

const StyledProductList = styled.div`
  .list-filter {
    margin-bottom: 2rem;
    min-width: 225px;
  }

  .product-items {
    display: flex;
    flex-wrap: wrap;
    margin: -0.75rem;

    .listed-product,
    .filler {
      margin: 0.75rem;
      flex-basis: 225px;
      flex-grow: 1;
    }
  }

  ${atSize(
    "lg",
    css`
      display: flex;
      align-items: flex-start;

      .list-filter {
        margin-bottom: 0;
        margin-right: 1.5rem;
        position: sticky;
        top: 4.5rem;
      }
    `
  )}
`;

export default ProductList;
