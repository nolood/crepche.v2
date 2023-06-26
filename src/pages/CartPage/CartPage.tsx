import { Box, Modal } from '@mui/material';
import { useEffect, useState } from 'react';
import { BasketList, BasketManaging } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectId } from '../../store/slices/userSlice/userSelectors';
import { fetchCartItems } from '../../store/slices/basketSlice/basketAsync';
import OfferPlacement from '../../components/OfferPlacement';

const CartPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userId = useAppSelector(selectId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (userId) {
      dispatch(fetchCartItems(userId));
    }
  });
  return (
    <Box sx={{ pb: 4 }}>
      <BasketManaging handleOpen={handleOpen} />
      <BasketList />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <OfferPlacement handleClose={handleClose} />
        </>
      </Modal>
    </Box>
  );
};

export default CartPage;
