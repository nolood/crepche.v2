import {
  Card, CardMedia, CardContent, Typography, CardActions, Button, Box,
} from '@mui/material';
import { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { BasketCardProps } from '../../types/PropsTypes/BasketCardProps';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectId } from '../../store/slices/userSlice/userSelectors';
import { addCount, deleteBasketItem } from '../../store/slices/basketSlice/basketAsync';

const BasketCard: FC<BasketCardProps> = ({ item, basketItems }) => {
  const [count, setCount] = useState(item.count);
  const userId = useAppSelector(selectId);
  const dispatch = useAppDispatch();
  const handlePlusCount = async () => {
    await setCount((prev) => prev + 1);
    dispatch(addCount({
      count: count + 1,
      basketItems,
      item,
      userId: String(userId),
    }));
  };
  const handleMinusCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1); dispatch(addCount({
        count: count - 1,
        basketItems,
        item,
        userId: String(userId),
      }));
    }
  };
  const handleDeleteBasketItem = () => {
    dispatch(deleteBasketItem({ userId: String(userId), item }));
  };
  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
      }}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
      }}
      >
        <CardMedia
          component="img"
          sx={{
            height: '140px',
            width: { xs: '100%', md: '100px' },
          }}
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Цена:
            {' '}
            {(item.price * count).toFixed(2)}
            <br />
            Тип упаковки:
            {' '}
            {item.pack}
            <br />
            Кол-во:
            {' '}
            {count}
          </Typography>
        </CardContent>
      </Box>
      <CardActions>
        <Button
          variant="outlined"
          size="large"
          onClick={handleMinusCount}
        >
          -
        </Button>
        <Typography
          sx={{
            ml: 2,
            mr: 1.5,
          }}
        >
          {count}
        </Typography>
        <Button
          variant="outlined"
          size="large"
          onClick={handlePlusCount}
        >
          +
        </Button>
        <Button
          onClick={handleDeleteBasketItem}
          size="large"
        >
          <DeleteIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default BasketCard;
