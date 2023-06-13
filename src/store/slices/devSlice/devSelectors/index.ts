import { DevState } from '../../../../types/StoreTypes/DevState';

export const selectCategories = (state: {dev: DevState}) => state.dev.categories;
export const selectItems = (state: {dev: DevState}) => state.dev.items;
export const selectPopItems = (state: {dev: DevState}) => state.dev.popItems;
export const selectPromoItems = (state: {dev: DevState}) => state.dev.promoItems;
