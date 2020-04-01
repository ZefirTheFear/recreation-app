import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as mobileMenuActions from "../../store/actions/mobileMenuActions";

import "./MenuButton.scss";

const MenuButton = () => {
  const isMenuOpened = useSelector(state => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <div
      className={"menu-btn" + (isMenuOpened ? " menu-btn_close" : "")}
      onClick={() => dispatch(mobileMenuActions.toggleMenu())}
    >
      <div className="menu-btn__line" />
      <div className="menu-btn__line" />
      <div className="menu-btn__line" />
    </div>
  );
};

export default MenuButton;
