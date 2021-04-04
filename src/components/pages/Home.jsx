import { useEffect, useState } from "react";
import { Page } from "../presentational";
import { Categories, Showcase } from "../parts";
import { ProductSection } from "../utility";
import commerce from "../../lib/commerce";

const Home = ({ categories }) => {
  const [newProducts, setNewProducts] = useState([]);
  const [topProducts, setTopProducts] = useState([]);

  useEffect(() => {
    commerce.products
      .list({ limit: 4, category_slug: ["top-products"] })
      .then(products => setTopProducts(products));

    commerce.products
      .list({ limit: 4 })
      .then(products => setNewProducts(products));
  }, []);

  return (
    <Page>
      <Showcase />
      <ProductSection
        title="Just In!"
        subtitle="Our newest guitars and equipment. Get them first!"
        products={newProducts}
      />
      <ProductSection
        title="Classics &amp; Favourites"
        subtitle="The gear our customers love most."
        products={topProducts}
      />
      <Categories categories={categories} />
    </Page>
  );
};

export default Home;
