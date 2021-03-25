import styled, { css } from "styled-components";
import { BrandFilter, ProductSmall } from "./";
import { atSize } from "../../style/mixins";

const ProductList = ({ products }) => {
  return (
    <StyledProductList>
      {products.data ? (
        <>
          <BrandFilter className="list-filter" />
          <div className="product-items">
            {products.data.map(product => (
              <ProductSmall
                key={product.id}
                product={product}
                className="listed-product"
              />
            ))}
          </div>
        </>
      ) : (
        <p>No products found!</p>
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

    .listed-product {
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
