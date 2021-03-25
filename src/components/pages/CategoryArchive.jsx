import React, { useEffect, useState } from "react";
import commerce from "../../lib/commerce";
import { Loading, Typography } from "../presentational";
import { ProductList } from "../utility";

const CategoryArchive = ({ slug }) => {
  const [status, setStatus] = useState({ type: "loading" });
  const [category, setCategory] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchCategory = () => {
      setStatus({ type: "loading" });
      const catFetch = commerce.categories.retrieve(slug, { type: "slug" });
      const prodFetch = commerce.products.list({
        category_slug: [slug],
      });

      Promise.all([prodFetch, catFetch])
        .then(([products, category]) => {
          setProducts(products);
          setCategory(category);
          setStatus({ type: "success" });
        })
        .catch(error => {
          setStatus({ type: "error", error: error.data.error.message });
        });
    };

    fetchCategory();
  }, [slug]);

  if (status.type === "loading")
    return <Loading size="2x" height="4rem" center />;

  if (status.type === "error") return <div>Sorry, something went wrong!</div>;

  return (
    <section>
      <Typography
        type="h3"
        textAlign="center"
        capitalize
        size="1.75rem"
        mBot="2rem"
      >
        {category.name}
      </Typography>
      <ProductList products={products} />
    </section>
  );
};

export default CategoryArchive;
