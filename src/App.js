import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { Footer, Navbar } from "./components/parts";
import { Home, CategoryArchive, SingleProduct } from "./components/pages";
import { Container } from "./components/presentational";
import commerce from "./lib/commerce";
import styled from "styled-components";

const App = () => {
  const [instruments, setInstruments] = useState(null);

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

    fetchCategories();
  }, []);

  return (
    <StyledApp className="App">
      <Navbar categories={instruments} />
      <Container>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home categories={instruments} />}
          />
          <Route
            exact
            path="/category/:slug"
            render={rp => <CategoryArchive slug={rp.match.params.slug} />}
          />
          <Route
            exact
            path="/product/:slug"
            render={rp => <SingleProduct slug={rp.match.params.slug} />}
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
