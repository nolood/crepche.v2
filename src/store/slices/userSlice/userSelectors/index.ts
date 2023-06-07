import { UserState } from '../../../../types/StoreTypes/UserState';

export const selectId = (state: {user: UserState}) => state.user.id;
export const selectOpenMessage = (state: {user: UserState}) => state.user.openMessage;
export const selectMessage = (state: {user: UserState}) => state.user.message;
export const selectIsAuth = (state: {user: UserState}) => state.user.isAuth;
