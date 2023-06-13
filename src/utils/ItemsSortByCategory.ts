import { ItemType } from '../types/ItemType';

const ItemsSortByCategory = (
  itemsList: ItemType[],
  activeSubCategory: string,
  activeCategory: string,
  sorting: {
    sortBy: string,
    title: string,
  },
  search: string | null,
) => {
  let items = itemsList.filter((item) => {
    return item.categoryId === activeCategory && item.subCategoryId === activeSubCategory;
  });

  if (items.length === 0) {
    items = itemsList.filter((item) => {
      return item.categoryId === activeCategory;
    });
  }

  if (items.length === 0) {
    items = itemsList.filter((item) => {
      return item.subCategoryId === activeSubCategory;
    });
  }

  function compareTitles(a: ItemType, b: ItemType) {
    return a.title.localeCompare(b.title, 'ru');
  }

  if (sorting.title === 'алфавиту') {
    items = items.sort(compareTitles);
  } else {
    items = items.sort((a, b) => a.price - b.price);
  }

  if (sorting.sortBy === 'desc') {
    items = items.reverse();
  }

  if (search !== null && search !== '') {
    items = itemsList.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
  }

  return items;
};

export default ItemsSortByCategory;
