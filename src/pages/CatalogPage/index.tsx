import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { fetchItems } from '../../store/slices/devSlice/devAsync';

const AsideBar = React.lazy(() => import('../../components/AsideBar'));
const ItemsList = React.lazy(() => import('../../components/ItemsList'));
const Search = React.lazy(() => import('../../components/Search'));
const SortingPanel = React.lazy(() => import('../../components/SortingPanel'));
const MobileFloatingButton = React.lazy(() => import('../../components/MobileFloatingButton'));

const CatalogPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchItems());
  }, []);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        pb: 4,
      }}
    >
      <MobileFloatingButton />
      <AsideBar />
      <Stack sx={{ width: '100%' }}>
        <Stack
          sx={{ flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'center' } }}
        >
          <Search />
          <SortingPanel />
        </Stack>
        <ItemsList />
      </Stack>
    </Box>
  );
};

export default CatalogPage;
