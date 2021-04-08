import { useEffect, useState } from "react";
import { Route, Switch, useLocation } from "react-router";
import { Footer, Navbar } from "./components/parts";
import { Container } from "./components/presentational";
import {
  Home,
  CategoryArchive,
  SingleProduct,
  Search,
  Cart,
} from "./components/pages";
import commerce from "./lib/commerce";
import styled from "styled-components";
import SearchModal from "./components/parts/SearchModal";

const App = () => {
  const [cartQty, setCartQty] = useState(null);
  const [instruments, setInstruments] = useState(null);
  const [searching, setSearching] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await commerce.categories.list();
      const instruments = data
        .filter(
          ({ meta }) =>
            meta?.type !== "brand" && meta?.type !== "classification"
        )
        .reverse();
      setInstruments(instruments);
    };

    const fetchCart = async () => {
      const res = await commerce.cart.retrieve();
      setCartQty(res.total_items);
    };

    fetchCategories();
    fetchCart();
  }, []);

  const startSearch = () => setSearching(true);
  const stopSearch = () => setSearching(false);

  // On location change, close modal
  useEffect(() => stopSearch(), [location]);

  return (
    <StyledApp className="App">
      {searching && <SearchModal stopSearch={stopSearch} />}
      <Navbar
        categories={instruments}
        cartQty={cartQty || null}
        startSearch={startSearch}
      />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home categories={instruments} />}
          />
          <Route
            exact
            path="/search/:slug"
            render={rp => (
              <Search term={rp.location.state.term} stopSearch={stopSearch} />
            )}
          />
          <Route
            exact
            path="/category/:slug"
            render={rp => <CategoryArchive slug={rp.match.params.slug} />}
          />
          <Route
            exact
            path="/product/:slug"
            render={rp => (
              <SingleProduct
                slug={rp.match.params.slug}
                setCartQty={setCartQty}
              />
            )}
          />
          <Route
            exact
            path="/cart"
            render={() => <Cart setCartQty={setCartQty} />}
          />
        </Switch>
      </Container>
      <Footer />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default App;
