import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import {
  get, getDatabase, push, ref, remove, set, update,
} from 'firebase/database';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import { DevState } from '../../../../types/StoreTypes/DevState';
import { CategoryType, SubCategoryType } from '../../../../types/CategoryType';
import { ItemType } from '../../../../types/ItemType';

export const addCategory = createAsyncThunk('dev/addCategoryStatus', async (title: string) => {
  const db = await getDatabase();
  const categoryRef = ref(db, 'categories');
  const id: string = crypto.randomUUID();
  const data = { title, id };
  await push(categoryRef, data);
  return data;
});

export const fetchCategories = createAsyncThunk('dev/fetchCategoriesStatus', async () => {
  const db = await getDatabase();
  const categoryRef = ref(db, 'categories');
  return get(categoryRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const snapshotData = snapshot.val();
        return Object.values(snapshotData) as CategoryType[];
      }
      return [];
    });
});

export const addSubCategory = createAsyncThunk('dev/addSubCategoryStatus', async (param: {title: string, parentId: string}) => {
  const { title, parentId } = param;
  const db = await getDatabase();
  const categoriesRef = ref(db, 'categories');
  const categoryKey = await get(categoriesRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const values: CategoryType[] = Object.values(data);
        const keys: Array<string> = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
          if (values[i].id === parentId) {
            return keys[i];
          }
        }
      }
    });
  const subCategoryRef = ref(db, `categories/${categoryKey}/subcategories`);
  const id: string = crypto.randomUUID();
  const data = { title, id };
  await push(subCategoryRef, data);
  return { ...data, parentId };
});

export const deleteCategory = createAsyncThunk('dev/deleteCategoryStatus', async (id: string) => {
  const db = getDatabase();
  const categoriesRef = ref(db, 'categories');
  const categoryId = await get(categoriesRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const values: CategoryType[] = Object.values(snapshot.val());
        const keys: Array<string> = Object.keys(snapshot.val());
        for (let i = 0; i < keys.length; i++) {
          if (values[i].id === id) {
            return keys[i];
          }
        }
      }
    });
  const categoryRef = ref(db, `categories/${categoryId}`);
  await remove(categoryRef);
  return id;
});

export const deleteSubCategory = createAsyncThunk('dev/deleteSubCategoryStatus', async (param: {parentId: string, id: string}) => {
  const { parentId, id } = param;
  const db = getDatabase();
  const categoriesRef = ref(db, 'categories');
  const categoryKey = await get(categoriesRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const values: CategoryType[] = Object.values(data);
        const keys: Array<string> = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
          if (values[i].id === parentId) {
            return keys[i];
          }
        }
      }
    });
  const categoryRef = ref(db, `categories/${categoryKey}`);
  const subCategoryKey = await get(categoryRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const values: SubCategoryType[] = Object.values(data.subcategories);
        const keys: Array<string> = Object.keys(data.subcategories);
        for (let i = 0; i < keys.length; i++) {
          if (values[i].id === id) {
            return keys[i];
          }
        }
      }
    });
  const subCategoryRef = ref(db, `categories/${categoryKey}/subcategories/${subCategoryKey}`);
  await remove(subCategoryRef);
  return { parentId, id };
});

export const fetchItems = createAsyncThunk('dev/fetchItemsStatus', async () => {
  const db = await getDatabase();
  const itemsRef = ref(db, 'items');
  const itemsData: ItemType[] = await get(itemsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      } else {
        return [];
      }
    });
  localStorage.setItem('CREPCHE-ITEMS', JSON.stringify(itemsData));
  return itemsData;
});

export const changeItemsCategory = createAsyncThunk('dev/changeItemsCategoryStatus', async (params: {items: GridRowSelectionModel, subCategoryId: string, categories: CategoryType[]}) => {
  const { items, subCategoryId, categories } = params;
  const categoryId: string | undefined = categories.find((category) => category.subcategories
    ?.some((subcategory) => subcategory.id === subCategoryId))?.id;
  const db = getDatabase();
  items.forEach((item) => {
    const itemRef = ref(db, `items/${item}`);
    update(itemRef, { categoryId, subCategoryId });
  });
});

export const addFiles = createAsyncThunk('dev/changeItemsCategoryStatus', async (items: ItemType[]) => {
  const db = getDatabase();
  const itemsRef = ref(db, 'items');
  set(itemsRef, items);
});

export const fetchPromoItems = createAsyncThunk('dev/fetchPromoItemsStatus', async () => {
  const db = await getDatabase();
  const itemsRef = ref(db, 'promo');
  return get(itemsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val() as ItemType[];
      } else {
        return [];
      }
    });
});

export const fetchPopItems = createAsyncThunk('dev/fetchPopItemsStatus', async () => {
  const db = await getDatabase();
  const itemsRef = ref(db, 'pop');
  return get(itemsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val()) as ItemType[];
      } else {
        return [];
      }
    });
});

export const addPromoItems = createAsyncThunk('dev/addPromoItemsStatus', async (param: GridRowSelectionModel) => {
  const db = getDatabase();
  const result: ItemType[] = [];
  for (let i = 0; i < param.length; i++) {
    const itemRef = ref(db, `items/${param[i]}`);
    const snapshot = await get(itemRef);
    if (snapshot.exists()) {
      const item = snapshot.val() as ItemType;
      result.push(item);
    }
  }
  const promoRef = ref(db, 'promo');
  set(promoRef, result);
  return result as ItemType[];
});

export const addPopItems = createAsyncThunk('dev/addPopItemsStatus', async (param: GridRowSelectionModel) => {
  const db = getDatabase();
  const result: ItemType[] = [];
  for (let i = 0; i < param.length; i++) {
    const itemRef = ref(db, `items/${param[i]}`);
    const snapshot = await get(itemRef);
    if (snapshot.exists()) {
      const item = snapshot.val() as ItemType;
      result.push(item);
    }
  }
  const promoRef = ref(db, 'pop');
  set(promoRef, result);
  return result as ItemType[];
});

export const fetchOffers = createAsyncThunk('dev/fetchOffers', async () => {
  const db = getDatabase();
  const offersRef = ref(db, 'offers');
  return get(offersRef)
    .then((snapshot) => Object.values(snapshot.val()));
});

export const extraReducers = (builder: ActionReducerMapBuilder<DevState>) => {
  builder.addCase(fetchOffers.fulfilled, (state, action) => {
    state.offers = action.payload;
  });

  builder.addCase(addPromoItems.fulfilled, (state, action) => {
    state.promoItems = action.payload;
  });

  builder.addCase(addPopItems.fulfilled, (state, action) => {
    state.popItems = action.payload;
  });

  builder.addCase(fetchPopItems.fulfilled, (state, action) => {
    state.popItems = action.payload;
  });

  builder.addCase(fetchPromoItems.fulfilled, (state, action) => {
    state.promoItems = action.payload;
  });

  builder.addCase(fetchItems.fulfilled, (state, action) => {
    state.items = action.payload;
  });

  builder.addCase(addCategory.fulfilled, (state, action) => {
    state.categories = [...state.categories, action.payload];
  });

  builder.addCase(fetchCategories.fulfilled, (state, action) => {
    state.categories = [...action.payload.map((item) => {
      return {
        ...item,
        subcategories: item.subcategories && Object.values(item.subcategories),
      };
    })];
  });

  builder.addCase(deleteCategory.fulfilled, (state, action) => {
    state.categories = state.categories.filter((item) => item.id !== action.payload);
  });

  builder.addCase(addSubCategory.fulfilled, (state, action) => {
    state.categories = state.categories.map((item) => {
      if (item.id === action.payload.parentId) {
        if (item.subcategories) {
          return {
            ...item,
            subcategories: [...item.subcategories, {
              id: action.payload.id,
              title: action.payload.title,
            }],
          };
        } else {
          return {
            ...item,
            subcategories: [{
              id: action.payload.id,
              title: action.payload.title,
            }],
          };
        }
      } else {
        return item;
      }
    });
  });

  builder.addCase(deleteSubCategory.fulfilled, (state, action) => {
    state.categories = state.categories.map((item) => {
      if (item.id === action.payload.parentId) {
        return {
          ...item,
          subcategories: item.subcategories?.filter((subItem) => subItem.id !== action.payload.id),
        };
      } else {
        return {
          ...item,
        };
      }
    });
  });
};
