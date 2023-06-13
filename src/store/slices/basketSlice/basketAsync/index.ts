import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';
import {
  get, getDatabase, ref, remove, set,
} from 'firebase/database';
import { BasketState } from '../../../../types/StoreTypes/BasketState';
import { BasketItemType } from '../../../../types/BasketItemType';

export const addToCart = createAsyncThunk('basket/addToCartStatus', async (param: {
  id: number,
  title: string,
  pack: string,
  price: number,
  count: number,
  userId: string,
  image: string,
}) => {
  const {
    id, title, pack, price, count, userId, image,
  } = param;
  const db = getDatabase();
  const basketRef = ref(db, `users/${userId}/basket`);
  const basketItem = {
    id, title, price, pack, count, image,
  };
  const result = await get(basketRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        let res = Object.values(data) as BasketItemType[];
        if (res.find((item) => item.id === id)) {
          return res.map((item) => {
            if (item.id === id) {
              return { ...item, count: count + 1 };
            } else {
              return { ...item };
            }
          });
        } else {
          res = [...res, basketItem];
        }
        return res;
      } else {
        return [{ ...basketItem }];
      }
    });

  set(basketRef, result);
  return result;
});

export const fetchCartItems = createAsyncThunk('basket/fetchCartItemsStatus', async (userId: string) => {
  const db = getDatabase();
  const itemsRef = ref(db, `users/${userId}/basket`);
  return get(itemsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        return Object.values(data) as BasketItemType[];
      } else {
        return [];
      }
    });
});

export const addCount = createAsyncThunk('basket/addCountStatus', async (params: { count: number, item: BasketItemType, basketItems: BasketItemType[], userId: string }) => {
  const {
    count, basketItems, item, userId,
  } = params;
  const db = getDatabase();
  const basketRef = ref(db, `users/${userId}/basket`);
  const newBasket = basketItems.map((basketItem) => {
    if (basketItem.id === item.id) {
      return { ...basketItem, count };
    } else {
      return basketItem;
    }
  });
  set(basketRef, newBasket);
  return newBasket as BasketItemType[];
});

export const deleteBasket = createAsyncThunk('basket/deleteBasketStatus', async (userId: string) => {
  const db = getDatabase();
  const itemsRef = ref(db, `users/${userId}/basket`);
  remove(itemsRef);
  return [];
});

export const deleteBasketItem = createAsyncThunk('basket/deleteBasketItemStatus', async (param: { userId: string, item: BasketItemType }) => {
  const { userId, item } = param;
  const db = getDatabase();
  const itemsRef = ref(db, `users/${userId}/basket`);
  const result = await get(itemsRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const res = Object.values(data) as BasketItemType[];
        return res.filter((basketItem) => basketItem.id !== item.id);
      } else {
        return [];
      }
    });
  set(itemsRef, result);
  return result;
});

export const extraReducers = (builder: ActionReducerMapBuilder<BasketState>) => {
  builder.addCase(addToCart.fulfilled, (state, action) => {
    state.basketItems = [...action.payload];
  });
  builder.addCase(fetchCartItems.fulfilled, (state, action) => {
    state.basketItems = action.payload;
  });
  builder.addCase(addCount.fulfilled, (state, action) => {
    state.basketItems = action.payload;
  });
  builder.addCase(deleteBasket.fulfilled, (state, action) => {
    state.basketItems = action.payload;
  });
  builder.addCase(deleteBasketItem.fulfilled, (state, action) => {
    state.basketItems = action.payload;
  });
};
