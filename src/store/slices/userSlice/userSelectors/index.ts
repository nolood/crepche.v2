import { UserState } from '../../../../types/StoreTypes/UserState';

export const selectId = (state: {user: UserState}) => state.user.id;
export const selectOpenMessage = (state: {user: UserState}) => state.user.openMessage;
export const selectMessage = (state: {user: UserState}) => state.user.message;
export const selectIsAuth = (state: {user: UserState}) => state.user.isAuth;
export const selectSorting = (state: {user: UserState}) => state.user.sorting;
export const selectActiveCategory = (state: {user: UserState}) => state.user.activeCategory;
export const selectActiveSubCategory = (state: {user: UserState}) => state.user.activeSubCategory;
export const selectSearch = (state: {user: UserState}) => state.user.search;
