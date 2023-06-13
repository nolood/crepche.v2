import {
  AUTH_ROUTE, CART_ROUTE, CATALOG_ROUTE, DEV_ROUTE, HOME_ROUTE,
} from './utils/consts';
import { RoutesType } from './types/RoutesType';
import {
  AuthPage, CartPage, CatalogPage, DevPage, HomePage,
} from './pages';

export const publicRoutes: RoutesType[] = [
  {
    path: HOME_ROUTE,
    Component: HomePage,
  },
  {
    path: AUTH_ROUTE,
    Component: AuthPage,
  },
  {
    path: CATALOG_ROUTE,
    Component: CatalogPage,
  },
];

export const authRoutes: RoutesType[] = [
  {
    path: CART_ROUTE,
    Component: CartPage,
  },
];

export const protectRoutes: RoutesType[] = [
  {
    path: DEV_ROUTE,
    Component: DevPage,
  },
];
