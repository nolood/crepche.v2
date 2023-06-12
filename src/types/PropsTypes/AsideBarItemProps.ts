import { SubCategoryType } from '../CategoryType';

export type AsideBarItemProps = {
  title: string,
  id: string,
  subcategories?: SubCategoryType[],
  setActiveCategory: (title: string, id: string) => void;
}

export type AsideBarSubItemProps = {
  title: string,
  id: string,
}
