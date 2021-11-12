import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Switch } from "react-router";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import OrderReview from "./components/OrderReview/OrderReview";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/orders">
            <OrderReview />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          {/* <Route path="*">
            <NotFound />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
