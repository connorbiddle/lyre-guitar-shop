import { useEffect, useState } from "react";
import { Page, Typography } from "../presentational";
import CartProduct from "../utility/CartProduct";
import commerce from "../../lib/commerce";
import { Button } from "../utility";

const Cart = ({ setCartQty }) => {
  const [cart, setCart] = useState([]);
  const [status, setStatus] = useState({ type: "loading" });

  const fetchCart = async () => {
    setStatus({ type: "loading" });
    try {
      const res = await commerce.cart.retrieve();
      setCart(res);
      setCartQty(res.line_items.length);
      setStatus({ type: "success" });
    } catch (e) {
      setStatus({ type: "error" });
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <Page loading={status.type === "loading"}>
      {status.type !== "error" ? (
        cart.line_items?.length > 0 ? (
          <>
            <ul className="cart-products">
              {cart.line_items.map(product => (
                <CartProduct
                  key={product.id}
                  product={product}
                  refresh={fetchCart}
                />
              ))}
            </ul>
            <Typography type="h3" textAlign="center" mBot="1.5rem">
              Total: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <Button center disabled>
              Checkout (disabled)
            </Button>
          </>
        ) : (
          <Typography textAlign="center">Your cart is empty.</Typography>
        )
      ) : (
        <div>Something went wrong.</div>
      )}
    </Page>
  );
};

export default Cart;
