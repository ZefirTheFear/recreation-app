import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import MainPage from "./pages/Main/Main";
import OurServices from "./pages/OurServices/OurServices";
import GalleryPage from "./pages/Gallery/Gallery";
import ContactsPage from "./pages/Contacts/Contacts";

import Header from "./components/Header/Header";
import MenuMobile from "./components/MenuMobile/MenuMobile";

import * as mobileMenuActions from "./store/actions/mobileMenuActions";

function App() {
  const isMenuOpened = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  window.onresize = () => {
    if (isMenuOpened) {
      dispatch(mobileMenuActions.closeMenu());
    }
  };

  return (
    <BrowserRouter>
      <Header />
      <MenuMobile />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/our-services" component={OurServices} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
