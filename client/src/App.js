import React from "react"
//import Checkout from "./pages/checkout";
import Dashboard from "./pages/dashboard";
import HomePage from "./pages/home";
import Signup from "./pages/signup";
import Signing from "./pages/signing";
//import Wanted from "./pages/wanted";
import Product from "./pages/product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Error404} from "./pages/errors/404";
import {Layout} from "./components/Layout";
import {Posting} from "./pages/posting";
// import API from "./utils/API";
// import LocalAPI from "./utils/LocalAPI";
function App() {
// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
  return (<Router>
     <Switch>
    <Route exact path="/" component={Signing} />
    <Route path="/signing" component={Signing} />
    <Layout>
        <Route path="/home" component={HomePage} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/product" component={Product} />
        <Route path="/posting" component={Posting} />
        <Route component={ Error404 } />
        {/* <Route exact path="/posting" component={Posting} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/wanted" component={Wanted} />
        <Route exact path="/checkout" component={Checkout} /> */}
    </Layout>
    </Switch>
  </Router>
  )
};

export default App;
