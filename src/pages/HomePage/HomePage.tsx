import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchPopItems, fetchPromoItems } from '../../store/slices/devSlice/devAsync';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectPopItems, selectPromoItems } from '../../store/slices/devSlice/devSelectors';

const MobileFloatingButton = React.lazy(() => import('../../components/MobileFloatingButton'));
const AsideBar = React.lazy(() => import('../../components/AsideBar'));
const GroupItems = React.lazy(() => import('../../components/GroupItems'));

const HomePage = () => {
  const popItems = useAppSelector(selectPopItems);
  const promoItems = useAppSelector(selectPromoItems);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchPromoItems());
    dispatch(fetchPopItems());
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
      <Stack sx={{ width: '100%', ml: { xs: 0, md: 2 } }}>
        <GroupItems title="Товары по акции" items={promoItems} />
        <GroupItems title="Популярные товары" items={popItems} />
      </Stack>
    </Box>
  );
};

export default HomePage;
