import React, { useEffect, useState } from "react";
import { Page, Typography } from "../presentational";
import { ProductList } from "../utility";
import commerce from "../../lib/commerce";

const Search = ({ term }) => {
  const [status, setStatus] = useState({ type: "loading" });
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setStatus({ type: "loading" });
      setProducts([]);
      try {
        const prods = await commerce.products.list({ query: term });
        if (prods.data) setProducts(prods);
        setStatus({ type: "success" });
      } catch (error) {
        setStatus({ type: "error" });
      }
    };
    fetchProducts();
  }, [term]);

  if (status.type === "error") return <div>Sorry, something went wrong!</div>;

  return (
    <Page loading={status.type === "loading"}>
      {products && (
        <>
          <Typography
            type="h3"
            textAlign="center"
            capitalize
            size="1.75rem"
            mBot="2rem"
          >
            Search results for: {term}
          </Typography>
          {products.data?.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <Typography size="1.25rem" textAlign="center">
              Sorry - we didn't find anything matching your query!
            </Typography>
          )}
        </>
      )}
    </Page>
  );
};

export default Search;
