

export const getUserLoggedIn = () => {
  return {
    endpoint: '/api/users/find/me',
    method: 'GET',
    auth: true,
  };
};
