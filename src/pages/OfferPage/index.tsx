import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { fetchOffers } from '../../store/slices/devSlice/devAsync';

const OfferPage = () => {
  const offers = useAppSelector((state) => state.dev.offers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchOffers());
  }, []);
  return (
    <Box sx={{ pb: 4 }}>
      {offers.map((item: any) => (
        <Box key={item.userId} sx={{ borderBottom: '2px gray solid', mb: 4 }}>
          {item.name}
          {` ${item.surname} `}
          {item.phone}
          {item.basket.map((basket: any) => (
            <div key={basket.id}>
              {`${basket.count} `}
              {basket.title}
            </div>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default OfferPage;
