import React from "react";
import Checkout from "./pages/checkout";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/home";
import Posting from "./pages/posting";
import Signup from "./pages/signup";
import Wanted from "./pages/wanted";
import Product from "./pages/product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
