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
import Axios from 'axios'
import {AuthorizeRoute} from "./components/AuthorizeRoute";

function App() {

  const [userLoggedIn, setUserLoggedIn] = useState(false)

  useEffect(() => {
    checkCookie()
  }, [])

  const checkCookie = () => {
    return Axios.get('/checkcookie')
      .then(res => res.data && setUserLoggedIn(true))
  }

  return (<Router>
    <Switch>
      <Route exact path="/" component={Signing} />
      <Route path="/signing" component={Signing} />
      <Layout>
        <AuthorizeRoute path="/home" component={Home} userLoggedIn={userLoggedIn} />
        <AuthorizeRoute path="/dashboard" component={Dashboard} userLoggedIn={userLoggedIn} />
        <AuthorizeRoute path="/product/:id" component={Product} userLoggedIn={userLoggedIn} />
        <AuthorizeRoute path="/post-product" component={Posting} userLoggedIn={userLoggedIn} />
        <AuthorizeRoute path="/post-wanted" component={PostWanted} userLoggedIn={userLoggedIn} />
        <AuthorizeRoute path="/wanted" component={Wanted} userLoggedIn={userLoggedIn} />
      </Layout>
      <Route path="/*" component={Error404} />
    </Switch>
  </Router>
  )
};

export default App;