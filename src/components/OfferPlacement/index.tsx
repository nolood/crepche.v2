import { Box, Button, TextField } from '@mui/material';
import { FC, FormEvent } from 'react';
import { setOpenMessage } from '../../store/slices/userSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { sendOffer } from '../../store/slices/userSlice/userAsync';
import { selectBasketItems } from '../../store/slices/basketSlice/basketSelectors';
import { selectId } from '../../store/slices/userSlice/userSelectors';

interface OfferPlacementProps {
  handleClose: () => void;
}

const OfferPlacement: FC<OfferPlacementProps> = ({ handleClose }) => {
  const dispatch = useAppDispatch();
  const basket = useAppSelector(selectBasketItems);
  const userId = useAppSelector(selectId);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setOpenMessage(true));
    const data = new FormData(event.currentTarget);
    const formData = {
      name: String(data.get('name')),
      surname: String(data.get('surname')),
      phone: String(data.get('phone')),
    };

    dispatch(sendOffer({ ...formData, basket, userId }));
    handleClose();
  };

  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      }}
    >
      <TextField
        margin="normal"
        required
        fullWidth
        id="name"
        label="Имя"
        name="name"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="surname"
        label="Фамилия"
        name="surname"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="phone"
        label="Номер телефона"
        id="phone"
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Оформить заказ
      </Button>
    </Box>
  );
};

export default OfferPlacement;
