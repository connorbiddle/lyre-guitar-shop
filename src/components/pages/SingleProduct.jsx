import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { ImageGallery, Page, Typography } from "../presentational";
import { atSize } from "../../style/mixins";
import { Button } from "../utility";
import commerce from "../../lib/commerce";

const SingleProduct = ({ slug, setCartQty }) => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const onInputChange = e => {
    // Allow only deletion or numerical input
    const newChar = e.nativeEvent.data;
    if (!isNaN(parseInt(newChar)) || newChar === null)
      setQuantity(e.target.value);
  };

  const addToCart = async () => {
    const res = await commerce.cart.add(product.id, parseInt(quantity));
    setCartQty(res.cart.total_items);
    setAdded(true);
  };

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
            <div className="add-to-cart">
              <input type="text" value={quantity} onChange={onInputChange} />
              <Button onClick={addToCart} disabled={added}>
                {added ? "Added!" : "Add to Cart"}
              </Button>
            </div>
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
  .add-to-cart {
    display: flex;
    align-items: stretch;
    justify-content: center;

    ${atSize("lg", "justify-content: flex-start;")}

    input {
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
      width: 3rem;
      margin-right: 1rem;
      font-size: 1.4rem;
      text-align: center;
    }
  }
`;

export default SingleProduct;
