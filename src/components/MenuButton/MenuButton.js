import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as mobileMenuActions from "../../store/actions/mobileMenuActions";

import "./MenuButton.scss";

const MenuButton = () => {
  const isMenuOpened = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const onClickMenuBtn = useCallback(() => {
    dispatch(mobileMenuActions.toggleMenu());
  }, [dispatch]);

  return (
    <div className={"menu-btn" + (isMenuOpened ? " menu-btn_close" : "")} onClick={onClickMenuBtn}>
      <div className="menu-btn__line" />
      <div className="menu-btn__line" />
      <div className="menu-btn__line" />
    </div>
  );
};

export default MenuButton;
