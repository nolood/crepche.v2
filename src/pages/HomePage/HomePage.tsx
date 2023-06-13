import { Box, Stack } from '@mui/material';
import { useEffect } from 'react';
import { AsideBar } from '../../components';
import GroupItems from '../../components/GroupItems';
import { fetchPopItems, fetchPromoItems } from '../../store/slices/devSlice/devAsync';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectPopItems, selectPromoItems } from '../../store/slices/devSlice/devSelectors';

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
      }}
    >
      <AsideBar />
      <Stack sx={{ width: '100%', ml: 5 }}>
        <GroupItems title="Товары по акции" items={promoItems} />
        <GroupItems title="Популярные товары" items={popItems} />
      </Stack>
    </Box>
  );
};

export default HomePage;
