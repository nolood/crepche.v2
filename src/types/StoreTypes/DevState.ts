import { CategoryType } from '../CategoryType';
import { ItemType } from '../ItemType';

export type DevState = {
  categories: CategoryType[],
  items: ItemType[],
  promoItems: ItemType[],
  popItems: ItemType[],
  offers: any,
}
