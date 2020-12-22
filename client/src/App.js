import React, { useState, useEffect } from "react"
import Checkout from "./pages/checkout";
import Dashboard from "./pages/dashboard";
import Homepage from "./pages/home";
import Posting from "./pages/posting";
import Signup from "./pages/signup";
import Wanted from "./pages/wanted";
import Product from "./pages/product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import API from "./utils/API";
// import LocalAPI from "./utils/LocalAPI";



function App() {

// The app will not render correctly until you setup a Route component.
// Refer to the Basic Example documentation if you need to.
// (https://reacttraining.com/react-router/web/example/basic)
  return (<Router>
    <div>
      <Switch>
        {/* <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/posting" component={Posting} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/wanted" component={Wanted} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/checkout" component={Checkout} /> */}
      </Switch>
    </div>
  </Router>
  )
};



export default App;
