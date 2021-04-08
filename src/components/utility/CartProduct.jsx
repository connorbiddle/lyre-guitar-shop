import styled from "styled-components";
import { Icon, Typography } from "../presentational";
import commerce from "../../lib/commerce";
import { atSize } from "../../style/mixins";

const CartProduct = ({ product, refresh }) => {
  const { id, name, media, quantity, line_total } = product;

  const changeQuantity = quantity => {
    return async () => {
      await commerce.cart.update(id, { quantity });
      refresh();
    };
  };

  const deleteProduct = async () => {
    await commerce.cart.remove(id);
    refresh();
  };

  return (
    <StyledCartProduct>
      <figure className="cart-product-image">
        <img src={media.source} alt={name} />
      </figure>
      <div>
        <Typography type="h4" mBot="0.25rem">
          {name}&nbsp;
          <Typography as="span" muted fontWeight="400">
            &times; {quantity}
          </Typography>
        </Typography>
        <Typography mBot="0.75rem">
          {line_total.formatted_with_symbol}
        </Typography>
        <div className="cart-product-modifiers">
          <button
            className="cart-subtract"
            onClick={changeQuantity(quantity - 1)}
          >
            <Icon icon="fas fa-minus" />
          </button>
          <button className="cart-add" onClick={changeQuantity(quantity + 1)}>
            <Icon icon="fas fa-plus" />
          </button>
          <button className="cart-delete" onClick={deleteProduct}>
            <Icon icon="fas fa-trash" />
          </button>
        </div>
      </div>
    </StyledCartProduct>
  );
};

const StyledCartProduct = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  .cart-product-image {
    display: none;
    overflow: hidden;
    width: 150px;
    height: 150px;
    margin-right: 1rem;

    ${atSize("md", "display: block;")}
  }

  .cart-product-modifiers {
    display: flex;
    align-items: center;

    button {
      color: #fff;
      border: none;
      border-radius: 3px;
      font-size: 1rem;
      width: 1.75rem;
      height: 1.75rem;
      margin-right: 0.5em;
    }

    .cart-add {
      background: ${({ theme }) => theme.colors.success};
    }
    .cart-subtract {
      background: ${({ theme }) => theme.colors.darkGrey};
    }
    .cart-delete {
      background: ${({ theme }) => theme.colors.danger};
    }
  }
`;

export default CartProduct;
