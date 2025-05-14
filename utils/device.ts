export const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 640;
};

export const isTablet = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 640 && window.innerWidth < 1024;
};

export const isDesktop = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth >= 1024;
};
