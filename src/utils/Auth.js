export const IsAuth = () => {
  if (window !== undefined) {
    const checkLocal = localStorage.getItem('user');

    if (checkLocal) {
      return JSON.parse(checkLocal);
    } else {
      return false;
    }
  }
};
