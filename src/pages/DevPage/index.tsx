import { Stack } from '@mui/material';
import { useEffect } from 'react';
import Category from '../../components/DevPageComponents/Category';
import SubCategory from '../../components/DevPageComponents/SubCategory';
import CategoriesOverview from '../../components/DevPageComponents/CategoriesOverview';
import { fetchCategories } from '../../store/slices/devSlice/devAsync';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import ChangeItems from '../../components/DevPageComponents/ChangeItems.tsx';

const DevPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={4}>
        <Category />
        <SubCategory />
      </Stack>
      <CategoriesOverview />
      <ChangeItems />
    </Stack>
  );
};

export default DevPage;
