import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as mobileMenuActions from "../../store/actions/mobileMenuActions";

import "./MenuMobile.scss";

const MenuMobile = props => {
  const isMenuOpened = useSelector(state => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const navItems = useRef([
    {
      title: "Галерея",
      path: "/gallery",
      id: "1"
    },
    {
      title: "Контакты",
      path: "/contacts",
      id: "2"
    }
  ]);

  const closeMenuNGoToPage = path => {
    dispatch(mobileMenuActions.closeMenu());
    props.history.push(path);
  };

  return (
    <nav className={"menu-mobile" + (isMenuOpened ? " menu-mobile_opened" : "")}>
      <ul className={"menu-mobile__list" + (isMenuOpened ? " menu-mobile__list_opened" : "")}>
        {navItems.current.map(item => (
          <li
            className="menu-mobile__item"
            key={item.id}
            onClick={() => closeMenuNGoToPage(item.path)}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(MenuMobile);
