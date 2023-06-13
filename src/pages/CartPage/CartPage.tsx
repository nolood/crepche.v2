import { Box } from '@mui/material';
import { useEffect } from 'react';
import { BasketList, BasketManaging } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectId } from '../../store/slices/userSlice/userSelectors';
import { fetchCartItems } from '../../store/slices/basketSlice/basketAsync';

const CartPage = () => {
  const userId = useAppSelector(selectId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  });
  return (
    <Box>
      <BasketManaging />
      <BasketList />
    </Box>
  );
};

export default CartPage;
