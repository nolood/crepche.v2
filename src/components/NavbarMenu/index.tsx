import { Button, Menu, MenuItem } from '@mui/material';
import { FC, SyntheticEvent, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavigateFunction } from 'react-router-dom';
import NavbarItems from '../../utils/NavbarItems';
import { AUTH_ROUTE, CART_ROUTE } from '../../utils/consts';

interface NavbarMenuProps {
    navigate: NavigateFunction;
    userId: string | null;
    handleSignOut: () => void;
    handleOpen: () => void;
    handleOpenSec: () => void;
}

const NavbarMenu: FC<NavbarMenuProps> = ({
  navigate, userId, handleSignOut, handleOpen, handleOpenSec,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button
        sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' }, color: '#fff' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {NavbarItems.map(({ title, id, route }) => (
          <MenuItem
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
          </MenuItem>
        ))}
        <MenuItem
          sx={{
            color: 'white',
            display: 'block',
            fontWeight: 500,
            fontSize: '1.1rem',
          }}
          onClick={handleOpen}
        >
          Доставка
        </MenuItem>
        <MenuItem
          sx={{
            color: 'white',
            display: 'block',
            fontWeight: 500,
            fontSize: '1.1rem',
          }}
          onClick={handleOpenSec}
        >
          Связь с нами
        </MenuItem>
        <MenuItem
          onClick={() => navigate(CART_ROUTE)}
          sx={{
            color: 'white',
            display: 'block',
            fontWeight: 500,
            fontSize: '1.1rem',
          }}
        >
          Корзина
        </MenuItem>
        {!userId ? (
          <MenuItem
            onClick={() => navigate(AUTH_ROUTE)}
          >
            Войти / Зарегистрироваться
          </MenuItem>
        ) : (
          <MenuItem
            onClick={handleSignOut}
          >
            Выйти
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default NavbarMenu;
