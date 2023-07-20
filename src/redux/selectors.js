export const selectFilter = state => state.filter;

export const selectContacts = state => state.contacts.items;

export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;
