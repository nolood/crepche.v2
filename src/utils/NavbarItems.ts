import { CART_ROUTE, CATALOG_ROUTE, HOME_ROUTE } from './consts';
import { NavbarItemsType } from '../types/NavbarItemsType';

const NavbarItems : NavbarItemsType[] = [
  {
    id: 0,
    title: 'Home',
    route: HOME_ROUTE,
  },
  {
    id: 1,
    title: 'Catalog',
    route: CATALOG_ROUTE,
  },
  {
    id: 2,
    title: 'Cart',
    route: CART_ROUTE,
  },
];

export default NavbarItems;
