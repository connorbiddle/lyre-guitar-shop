import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import commerce from "./lib/commerce";

import { Navbar } from "./components/parts";
import { CategoryArchive } from "./components/pages";

const App = () => {
  const [instruments, setInstruments] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await commerce.categories.list();
      const instruments = data
        .filter(category => category.meta?.type !== "brand")
        .reverse();
      setInstruments(instruments);
    };

    fetchCategories();
  }, []);

  return (
    <div className="App">
      <Navbar categories={instruments} />
      <Switch>
        <Route
          exact
          path="/category/:slug"
          render={rp => <CategoryArchive slug={rp.match.params.slug} />}
        />
      </Switch>
    </div>
  );
};

export default App;
