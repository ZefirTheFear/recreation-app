import * as menuActions from "../actions/mobileMenuActions";

const initialState = {
  isMenuOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case menuActions.OPEN_MENU:
      document.documentElement.style.overflow = "hidden";
      return { isMenuOpen: true };

    case menuActions.CLOSE_MENU:
      document.documentElement.style.overflow = "";
      return { isMenuOpen: false };

    case menuActions.TOGGLE_MENU:
      state.isMenuOpen
        ? (document.documentElement.style.overflow = "")
        : (document.documentElement.style.overflow = "hidden");
      return { isMenuOpen: !state.isMenuOpen };

    default:
      return state;
  }
};
