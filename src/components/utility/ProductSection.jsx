import styled from "styled-components";
import { ProductSmall } from ".";
import { Loading, PageSection, Typography } from "../presentational";

const ProductSection = ({ title, subtitle, products }) => {
  return (
    <PageSection>
      <Typography type="h2" textAlign="center" size="2rem" capitalize>
        {title}
      </Typography>
      <Typography type="h3" textAlign="center" fontWeight="400" mBot="2rem">
        {subtitle}
      </Typography>
      {products.data ? (
        <ProductSectionList>
          {products.data.map(product => (
            <ProductSmall
              key={product.id}
              product={product}
              className="product-section-item"
            />
          ))}
        </ProductSectionList>
      ) : (
        <Loading center size="2x" height="10rem" />
      )}
    </PageSection>
  );
};

const ProductSectionList = styled.div`
  display: flex;
  margin: -1rem;
  justify-content: center;
  flex-wrap: wrap;

  .product-section-item {
    margin: 1rem;
    flex: 1;
    flex-basis: 268px;
    flex-grow: 0;
  }
`;

export default ProductSection;
