import {
  Card, CardActions, CardContent, CardMedia, Typography, Button, Tooltip,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { ref, getDownloadURL, getStorage } from 'firebase/storage';
import { CardItemProps } from '../../types/PropsTypes/CardItemProps';
import CardImageSkeleton from './CardImageSkeleton.tsx';

const CardItem: FC<CardItemProps> = ({
  id, title, pack, price, activeSubCategory,
}) => {
  const [image, setImage] = useState<string | null>(null);
  const storage = getStorage();
  const getImageUrl = async () => {
    const storageRef = ref(storage, `ItemsImages/${activeSubCategory}.webp`);
    try {
      const downloadURL = await getDownloadURL(storageRef);
      setImage(downloadURL);
    } catch (error) {
      console.log(error, id);
    }
  };
  useEffect(() => {
    getImageUrl();
  }, []);
  return (
    <Card
      sx={{
        width: '350px',
      }}
    >
      {image
        ? (
          <CardMedia
            component="img"
            alt="cringe"
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
        <Button
          size="large"
          sx={{ width: '100%' }}
        >
          Добавить в корзину
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardItem;
