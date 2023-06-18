import { CATALOG_ROUTE, HOME_ROUTE } from './consts';
import { NavbarItemsType } from '../types/NavbarItemsType';

const NavbarItems : NavbarItemsType[] = [
  {
    id: 0,
    title: 'Домой',
    route: HOME_ROUTE,
  },
  {
    id: 1,
    title: 'Каталог',
    route: CATALOG_ROUTE,
  },
];

export default NavbarItems;
