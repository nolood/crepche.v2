import { ItemType } from '../types/ItemType';

const ItemsSortByCategory = (
  itemsList: ItemType[],
  activeSubCategory: string,
  activeCategory: string,
) => {
  let items = itemsList.filter((item) => {
    return item.categoryId === activeCategory && item.subCategoryId === activeSubCategory;
  });
  if (items.length === 0) {
    items = itemsList.filter((item) => {
      return item.subCategoryId === activeSubCategory;
    });
  }
  return items;
};

export default ItemsSortByCategory;
