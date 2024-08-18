export const getQuery = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return Object.fromEntries(urlParams);
};
