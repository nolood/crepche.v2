import {
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { AuthData } from '../../types/StoreTypes/AuthData';
import { loginUser, regUser } from '../../store/slices/userSlice/userAsync';
import { setOpenMessage } from '../../store/slices/userSlice';
import { selectIsAuth } from '../../store/slices/userSlice/userSelectors';
import { HOME_ROUTE } from '../../utils/consts';

const AuthPage = () => {
  const [auth, setAuth] = useState<boolean>(true);
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate(HOME_ROUTE);
    }
  }, [isAuth]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setOpenMessage(true));
    const data = new FormData(event.currentTarget);
    const formData: AuthData = {
      email: String(data.get('email')),
      password: String(data.get('password')),
    };
    if (auth) {
      dispatch(loginUser(formData));
    } else {
      dispatch(regUser(formData));
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Avatar sx={{ m: 1 }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {auth ? 'Вход' : 'Регистрация'}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {auth ? 'Войти' : 'Зарегистрироваться'}
        </Button>
        <Button
          sx={{
            padding: 0,
          }}
          onClick={() => setAuth(!auth)}
        >
          {auth ? 'Нет аккаунта? Зарегистрируйтесь!' : 'Есть аккаунт? Войдите!'}
        </Button>
      </Box>
    </Box>
  );
};

export default AuthPage;
