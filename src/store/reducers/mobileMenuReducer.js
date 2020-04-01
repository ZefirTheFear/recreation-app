import * as menuActions from "../actions/mobileMenuActions";

const initialState = {
  isMenuOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case menuActions.OPEN_MENU:
      return { isMenuOpen: true };

    case menuActions.CLOSE_MENU:
      return { isMenuOpen: false };

    case menuActions.TOGGLE_MENU:
      return { isMenuOpen: !state.isMenuOpen };

    default:
      return state;
  }
};
