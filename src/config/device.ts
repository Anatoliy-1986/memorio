export const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1025,
};

export const device = {
  mobile: `(max-width: ${breakpoints.tablet - 0.1}px)`,
  tablet: `(max-width: ${breakpoints.desktop - 0.1}px)`,
  desktop: `(min-width: ${breakpoints.desktop - 0.1}px)`,
};
