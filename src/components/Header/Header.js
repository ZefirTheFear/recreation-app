import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "../../assets/spinner-logo.svg";
import MenuButton from "../MenuButton/MenuButton";

import * as mobileMenuActions from "../../store/actions/mobileMenuActions";

import "./Header.scss";

const Header = props => {
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

  const logoClick = () => {
    dispatch(mobileMenuActions.closeMenu());
    props.history.push("/");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo" onClick={logoClick}>
          <img src={logo} alt="logo" className="header__logo-img" />
        </div>
        <nav className="header__menu">
          {navItems.current.map(item => (
            <div
              key={item.id}
              className="header__menu-item"
              onClick={() => props.history.push(item.path)}
            >
              {item.title}
            </div>
          ))}
        </nav>
        <MenuButton />
      </div>
    </header>
  );
};

export default withRouter(Header);
