export const MAKE_HEADER_OPAQUE = "MAKE_HEADER_OPAQUE";
export const MAKE_HEADER_TRANSPARENT = "MAKE_HEADER_TRANSPARENT";

export const makeHeaderOpaque = () => ({
  type: MAKE_HEADER_OPAQUE
});

export const makeHeaderTransparent = () => ({
  type: MAKE_HEADER_TRANSPARENT
});
