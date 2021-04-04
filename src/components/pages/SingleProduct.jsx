import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ImageGallery, Page, Typography } from "../presentational";
import commerce from "../../lib/commerce";
import { atSize } from "../../style/mixins";

const SingleProduct = ({ slug }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const prod = await commerce.products.retrieve(slug, {
        type: "permalink",
      });
      setProduct(prod);
    };

    fetchProduct();
  }, [slug]);

  return (
    <Page loading={product === null}>
      {product && (
        <StyledProduct>
          <ImageGallery
            images={product.assets.filter(a => a.is_image)}
            className="single-product-gallery"
          />
          <div className="single-product-info">
            <Typography type="h2">{product.name}</Typography>
            <Typography type="h2" muted>
              {product.price.formatted_with_symbol}
            </Typography>
            <Typography>
              <span dangerouslySetInnerHTML={{ __html: product.description }} />
            </Typography>
          </div>
        </StyledProduct>
      )}
    </Page>
  );
};

const StyledProduct = styled.section`
  text-align: center;

  ${atSize(
    "lg",
    css`
      text-align: left;
      display: flex;

      .single-product-gallery {
        min-width: 45%;
        margin-right: 2rem;
      }
    `
  )}
`;

export default SingleProduct;
