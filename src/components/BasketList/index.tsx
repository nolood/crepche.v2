import { Grid } from '@mui/material';
import { BasketCard } from '../index';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectBasketItems } from '../../store/slices/basketSlice/basketSelectors';

const BasketList = () => {
  const basketItems = useAppSelector(selectBasketItems);
  return (
    <Grid container spacing={2} columns={1}>
      {basketItems.map((item) => (
        <Grid item xs={8} key={item.id}>
          <BasketCard item={item} basketItems={basketItems} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BasketList;
