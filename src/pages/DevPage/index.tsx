import { Stack } from '@mui/material';
import { useEffect } from 'react';
import Category from '../../components/DevPageComponents/Category';
import SubCategory from '../../components/DevPageComponents/SubCategory';
import CategoriesOverview from '../../components/DevPageComponents/CategoriesOverview';
import { fetchCategories, fetchPopItems, fetchPromoItems } from '../../store/slices/devSlice/devAsync';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import ChangeItems from '../../components/DevPageComponents/ChangeItems';
import GroupItems from '../../components/GroupItems';
import { selectPopItems, selectPromoItems } from '../../store/slices/devSlice/devSelectors';

const DevPage = () => {
  const dispatch = useAppDispatch();
  const popItems = useAppSelector(selectPopItems);
  const promoItems = useAppSelector(selectPromoItems);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchPromoItems());
    dispatch(fetchPopItems());
  }, []);

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <Category />
        <SubCategory />
      </Stack>
      <CategoriesOverview />
      <ChangeItems />
      <GroupItems title="Товары по акции" items={promoItems} />
      <GroupItems title="Популярные товары" items={popItems} />
    </Stack>
  );
};

export default DevPage;
