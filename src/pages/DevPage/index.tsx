import { Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchCategories, fetchPopItems, fetchPromoItems } from '../../store/slices/devSlice/devAsync';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectPopItems, selectPromoItems } from '../../store/slices/devSlice/devSelectors';

const ChangeItems = React.lazy(() => import('../../components/DevPageComponents/ChangeItems'));
const GroupItems = React.lazy(() => import('../../components/GroupItems'));
const Category = React.lazy(() => import('../../components/DevPageComponents/Category'));
const SubCategory = React.lazy(() => import('../../components/DevPageComponents/SubCategory'));
const CategoriesOverview = React.lazy(() => import('../../components/DevPageComponents/CategoriesOverview'));

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
