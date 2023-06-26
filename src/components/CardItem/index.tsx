import {
  Card, CardActions, CardContent, CardMedia, Typography, Button, Tooltip,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { CardItemProps } from '../../types/PropsTypes/CardItemProps';
import CardImageSkeleton from './CardImageSkeleton';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import getImageUrl from '../../utils/getImageUrl';
import { selectId } from '../../store/slices/userSlice/userSelectors';
import { addToCart } from '../../store/slices/basketSlice/basketAsync';

const CardItem: FC<CardItemProps> = ({
  id, title, pack, price, activeSubCategory,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const userId = useAppSelector(selectId);
  const handleAddToCart = () => {
    if (id) {
      dispatch(addToCart({
        id,
        title,
        pack,
        price,
        count: 1,
        image: String(image),
        userId: String(userId),
      }));
    }
  };
  useEffect(() => {
    getImageUrl(activeSubCategory)
      .then((result) => {
        setImage(String(result));
      });
  }, []);
  return (
    <Card
      sx={{
        width: { xs: '250px', md: '350px' },
      }}
    >
      {image
        ? (
          <CardMedia
            component="img"
            alt={title}
            height="140"
            image={String(image)}
          />
        )
        : <CardImageSkeleton />}
      <CardContent>
        <Tooltip title={title}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            noWrap
            sx={{
              fontSize: { xs: '11px', md: '1rem' },
            }}
          >
            {title}
          </Typography>
        </Tooltip>
        <Typography variant="body2" color="text.secondary">
          Цена:
          {' '}
          {`${price.toFixed(2)}р`}
          <br />
          Тип упаковки:
          {' '}
          {pack}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title={!userId && 'Чтобы пользоваться корзиной необходимо войти'}>
          <Button
            size="large"
            sx={{ width: '100%' }}
            onClick={handleAddToCart}
          >
            Добавить в корзину
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CardItem;
