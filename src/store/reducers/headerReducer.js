import * as headerActions from "../actions/headerActions";

const initialState = {
  isOpaque: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case headerActions.MAKE_HEADER_OPAQUE:
      return { isOpaque: true };

    case headerActions.MAKE_HEADER_TRANSPARENT:
      return { isOpaque: false };

    default:
      return state;
  }
};
