export const selectUser = state => state.auth.user;

export const selectAuthError = state => state.auth.error;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;
