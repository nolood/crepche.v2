import { Snackbar, Alert } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectMessage, selectOpenMessage } from '../../store/slices/userSlice/userSelectors';
import { setMessage, setOpenMessage } from '../../store/slices/userSlice';
import MessageCode from '../../utils/MessageCode';

const AlertMessage = () => {
  const open = useAppSelector(selectOpenMessage);
  const message = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();
  const messageText = MessageCode.get(String(message.title));
  const handleClose = () => {
    dispatch(setOpenMessage(false));
    dispatch(setMessage({ title: null, type: undefined }));
  };
  if (!messageText && !message.title) {
    return null;
  }

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={message.type} sx={{ width: '100%' }}>
        {messageText || message.title}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
