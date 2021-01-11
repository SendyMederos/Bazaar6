import React, { useState, useEffect } from "react"
import Home from './pages/home'
import Dashboard from "./pages/dashboard";
import Signing from "./pages/signing";
import { PostWanted } from "./pages/postWanted";
import { Wanted } from "./pages/wanted";
import Product from "./pages/product";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Error404 } from "./pages/errors/404";
import { Layout } from "./components/Layout";
import { Posting } from "./pages/posting";
import http from './services/http'

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)
  return (<Router >
    <Switch>
      <Switch>
        <Route exact path="/" component={Signing} />
        <Route path="/signing" component={Signing} />
        <Layout>
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/product/:id" component={Product} />
          <Route path="/post-product" component={Posting} />
          <Route path="/post-wanted" component={PostWanted} />
          <Route path="/wanted" component={Wanted} />
        </Layout>
        <Route path="/*" component={Error404} />
      </Switch>
    </Switch>
  </Router>
  )
};

export default App;