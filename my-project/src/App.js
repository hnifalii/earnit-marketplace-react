import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Hooks
import useFetch from "./hooks/useFetch";

// Pages
import Header from "./app/header";
import Banner from "./app/banner";
import Section from "./app/section";
import Login from "./app/login";
import TrendingProduct from "./app/trendingProduct";
import ProductDetails from "./app/productDetails";
import Signup from "./app/signup";
import Test from "./app/test";
import Test2 from "./app/test2";
import Footer from "./app/footer";
import Dashboard from "./app/dashboard";
import Error from "./app/error";
import Hero from "./app/hero";
import Hero2 from "./app/hero2";
import Trending from "./app/trending";
import Products from "./app/products";
import Services from "./app/services";
import Buy from "./app/buy";
import Cart from "./app/cart";
import SearchResult from "./app/searchResult";
import SearchDetails from "./app/searchDetails";

function App() {
  // const [query, setQuery] = useState("");

  // const { data } = useFetch(
  //   "http://localhost:1337/api/products?populate=*"
  // );

  // console.log(data);

  return (
    <div className="App font-sans">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Banner />
            <Section />
            <Hero />
            <Hero2 />
            <Footer />
          </Route>
          <Route exact path="/search">
            <Header />
            <SearchResult />
            <Footer />
          </Route>
          <Route exact path="/product/aerostreet/:id">
            <Header />
            <SearchDetails />
            <Footer />
          </Route>
          <Route exact path="/details/:id">
            <Header />
            <ProductDetails />
            <Footer />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
            <Footer />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/dashboard">
            <Header />
            <Dashboard />
            <Footer />
          </Route>
          <Route exact path="/trending">
            <Trending />
            <Footer />
          </Route>
          <Route exact path="/trending/details/:id">
            <Header />
            <TrendingProduct />
            <Footer />
          </Route>
          <Route exact path="/buy">
            <Header />
            <Buy />
            <Footer />
          </Route>
          <Route exact path="/discover">
            <Header />
            <Products />
            <Footer />
          </Route>
          <Route exact path="/oauth">
            <div>AUTHENTICATION SUCCES</div>
          </Route>
          {/* Display error if path doesn't exist */}
          <Route exact path="*">
            <Error />
          </Route>
          <ToastContainer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
