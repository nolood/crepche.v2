import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import {
  AsideBar, ItemsList, Search, SortingPanel,
} from '../../components';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { fetchItems } from '../../store/slices/devSlice/devAsync';

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
      }}
    >
      <AsideBar />
      <Stack sx={{ width: '100%' }}>
        <Stack direction="row">
          <Search />
          <SortingPanel />
        </Stack>
        <ItemsList />
      </Stack>
    </Box>
  );
};

export default CatalogPage;
