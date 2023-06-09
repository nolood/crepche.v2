import {
  AUTH_ROUTE, CART_ROUTE, DEV_ROUTE, HOME_ROUTE,
} from './utils/consts';
import { RoutesType } from './types/RoutesType';
import {
  AuthPage, CartPage, DevPage, HomePage,
} from './pages';
// import MainLayout from './layouts/MainLayout';

export const publicRoutes: RoutesType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
    // Layout: MainLayout,
  },
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
    // Layout: MainLayout,
  },
  {
    path: DEV_ROUTE,
    Component: DevPage,
    // Layout: MainLayout,
  },
];

export const authRoutes: RoutesType[] = [
  {
    path: CART_ROUTE,
    Component: CartPage,
    // Layout: MainLayout,
  },
];
