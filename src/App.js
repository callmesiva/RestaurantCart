import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./RTK/store";

const AppLayout = () => (
  <Provider store={store}>
    <Header />
    <Body />
    <Footer />
  </Provider>
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
