import {
  AppBar,
  Box,
  Button, Modal,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import NavbarItems from '../../utils/NavbarItems';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectId } from '../../store/slices/userSlice/userSelectors';
import { AUTH_ROUTE, CART_ROUTE, HOME_ROUTE } from '../../utils/consts';
import NavbarSkeleton from './NavbarSkeleton';

const NavbarMenu = React.lazy(() => import('../NavbarMenu'));

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [openSec, setOpenSec] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenSec = () => setOpenSec(true);
  const handleCloseSec = () => setOpenSec(false);
  const navigate = useNavigate();
  const userId = useAppSelector(selectId);
  const auth = getAuth();
  const [, loading] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate(HOME_ROUTE);
    }).catch((error) => {
      console.log(error);
    });
  };

  if (loading) return <NavbarSkeleton />;

  return (
    <AppBar position="fixed">
      <Modal
        open={openSec}
        onClose={handleCloseSec}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '300px', md: '700px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 4, md: 10 },
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            align="center"
            sx={{
              mb: 2,
            }}
          >
            Связаться с нами
          </Typography>
          <Typography
            align="center"
          >
            Телефон 1: +79222387191
            {' '}
            <br />
            Телефон 2: +79320180949
            {' '}
            <br />
            Электронная почта: krep-che@mail.ru
          </Typography>
        </Box>
      </Modal>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="div"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '300px', md: '700px' },
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: { xs: 4, md: 10 },
          }}
        >
          <Typography
            variant="h4"
            component="h4"
            align="center"
            sx={{
              mb: 2,
            }}
          >
            Доставка
          </Typography>
          <Typography
            align="center"
          >
            Доставка заказов по Челябинску бесплатная, доставляем на следующий день.
            Доставка по области - цена и сроки договорные.
            В другие регионы отправляем удобной вам транспортной компанией.
            Вы можете получить консультацию или оформить заказ по номеру телефона,
            нажав на кнопку "связаться с нами", выбрав удобный способ. Либо оформите заказ на сайте,
            отправьте заявку и в ближайшее время с вами свяжутся, чтоб подтвердить заказ и
            обговорить детали.
          </Typography>
        </Box>
      </Modal>
      <Toolbar
        sx={{ display: { xs: 'flex' }, justifyContent: 'space-between' }}
      >
        <Typography
          variant="h4"
          onClick={() => navigate(HOME_ROUTE)}
          noWrap
          sx={{
            mr: 5,
            textTransform: 'uppercase',
            fontFamily: 'monospace bold',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          креп-че
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {NavbarItems.map(({ title, id, route }) => (
            <Button
              key={id}
              onClick={() => navigate(route)}
              sx={{
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '1.1rem',
              }}
            >
              {title}
            </Button>
          ))}
          <Button
            sx={{
              color: 'white',
              display: 'block',
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
            onClick={handleOpen}
          >
            Доставка
          </Button>
          <Button
            sx={{
              color: 'white',
              display: 'block',
              fontWeight: 500,
              fontSize: '1.1rem',
            }}
            onClick={handleOpenSec}
          >
            Связь с нами
          </Button>
          <Tooltip
            title={!userId && 'Чтобы пользоваться корзиной необходимо войти'}
          >
            <Button
              onClick={() => navigate(CART_ROUTE)}
              sx={{
                color: 'white',
                display: 'block',
                fontWeight: 500,
                fontSize: '1.1rem',
              }}
            >
              Корзина
            </Button>
          </Tooltip>
        </Box>
        {!userId ? (
          <Button
            onClick={() => navigate(AUTH_ROUTE)}
            sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}
          >
            Войти / Зарегистрироваться
          </Button>
        ) : (
          <Button
            onClick={handleSignOut}
            sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}
          >
            Выйти
          </Button>
        )}
        <NavbarMenu
          navigate={navigate}
          userId={userId}
          handleSignOut={handleSignOut}
          handleOpen={handleOpen}
          handleOpenSec={handleOpenSec}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
