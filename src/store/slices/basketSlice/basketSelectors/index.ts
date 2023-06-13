import { BasketState } from '../../../../types/StoreTypes/BasketState';

export const selectBasketItems = (state: {basket: BasketState}) => state.basket.basketItems;
