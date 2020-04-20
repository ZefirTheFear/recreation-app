import React, { useRef, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import MenuButton from "../MenuButton/MenuButton";

import * as mobileMenuActions from "../../store/actions/mobileMenuActions";

import "./Header.scss";

const Header = ({ history }) => {
  const isMenuOpened = useSelector((state) => state.menu.isMenuOpen);
  const isHeaderOpaque = useSelector((state) => state.header.isOpaque);
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

  const onClickLogo = useCallback(() => {
    dispatch(mobileMenuActions.closeMenu());
    history.push("/");
  }, [dispatch, history]);

  const onClickMenuItem = (e) => {
    history.push(e.currentTarget.getAttribute("data-path"));
  };

  return (
    <header className={"header" + (isMenuOpened || isHeaderOpaque ? " header_opaque" : "")}>
      <div className="header__inner">
        <div className="header__logo" onClick={onClickLogo}>
          {/* <img src={logo} alt="logo" className="header__logo-img" /> */}
          <Logo className="header__logo-icon" />
        </div>
        <nav className="header__menu">
          {navItems.current.map((item) => (
            <div
              key={item.id}
              data-path={item.path}
              className="header__menu-item"
              // onClick={() => history.push(item.path)}
              onClick={onClickMenuItem}
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
