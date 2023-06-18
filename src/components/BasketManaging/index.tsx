import {
  Button, Stack, Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectBasketItems } from '../../store/slices/basketSlice/basketSelectors';
import { deleteBasket } from '../../store/slices/basketSlice/basketAsync';
import { selectId } from '../../store/slices/userSlice/userSelectors';

const BasketManaging = () => {
  const basketItems = useAppSelector(selectBasketItems);
  const userId = useAppSelector(selectId);
  const totalPrice = basketItems.reduce((total, item) => total + (item.price * item.count), 0);
  const totalCount = basketItems.reduce((total, item) => total + item.count, 0);
  const dispatch = useAppDispatch();
  const handleClearCart = () => {
    dispatch(deleteBasket(String(userId)));
  };
  return (
    <Stack
      sx={{
        alignItems: 'center', mb: 2, flexDirection: { xs: 'column', md: 'row' }, gap: 2,
      }}
    >
      <Typography
        sx={{ mr: 2 }}
      >
        Товаров в корзине:
        {` ${totalCount}`}
      </Typography>
      <Typography
        sx={{ mr: 2 }}
      >
        Общая стоимость:
        {` ${totalPrice.toFixed()}р.`}
      </Typography>
      <Button
        variant="outlined"
        onClick={handleClearCart}
        disabled={basketItems.length === 0}
      >
        Очистить корзину
      </Button>
      <Button
        variant="outlined"
        disabled={basketItems.length === 0}
      >
        Оформить заказ
      </Button>
    </Stack>
  );
};

export default BasketManaging;
