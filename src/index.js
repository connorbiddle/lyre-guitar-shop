import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./style/GlobalStyles";
import Theme from "./style/Theme";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Theme>
        <GlobalStyles />
        <App />
      </Theme>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
