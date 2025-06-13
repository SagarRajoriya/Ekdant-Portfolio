export const getImageUrl = (path) => {
  // Handle both development and production environments
  return `${process.env.PUBLIC_URL}${path}`;
};
