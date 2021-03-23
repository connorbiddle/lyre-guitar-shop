import commerce from "./lib/commerce";
import { Navbar } from "./components/parts";

const App = () => {
  commerce.products
    .list()
    .then(({ data }) => console.log(data.map(prod => prod.name)));

  return (
    <div className="App">
      <Navbar />
    </div>
  );
};

export default App;
