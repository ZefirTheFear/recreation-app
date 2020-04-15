import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as mobileMenuActions from "../../store/actions/mobileMenuActions";

import "./MenuMobile.scss";

const MenuMobile = ({ history }) => {
  const isMenuOpened = useSelector((state) => state.menu.isMenuOpen);
  const dispatch = useDispatch();

  const navItems = useRef([
    {
      title: "Услуги",
      path: "/our-services",
      id: "1"
    },
    {
      title: "Галерея",
      path: "/gallery",
      id: "2"
    },
    {
      title: "Контакты",
      path: "/contacts",
      id: "3"
    }
  ]);

  const closeMenuNGoToPage = (e) => {
    dispatch(mobileMenuActions.closeMenu());
    history.push(e.currentTarget.getAttribute("data-path"));
  };

  return (
    <nav className={"menu-mobile" + (isMenuOpened ? " menu-mobile_opened" : "")}>
      <ul className={"menu-mobile__list" + (isMenuOpened ? " menu-mobile__list_opened" : "")}>
        {navItems.current.map((item) => (
          <li
            className="menu-mobile__item"
            key={item.id}
            data-path={item.path}
            // onClick={() => closeMenuNGoToPage(item.path)}
            onClick={closeMenuNGoToPage}
          >
            {item.title}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default withRouter(MenuMobile);
