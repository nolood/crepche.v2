import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavbarItems from '../../utils/NavbarItems';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectId } from '../../store/slices/userSlice/userSelectors';
import { AUTH_ROUTE, HOME_ROUTE } from '../../utils/consts';
import NavbarSkeleton from './NavbarSkeleton';

const Navbar = () => {
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
      <Toolbar>
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
          crep-che
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {NavbarItems.map(({ title, id, route }) => (
            <Button
              key={id}
              onClick={() => navigate(route)}
              disabled={title === 'Cart' && !userId}
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
        </Box>
        {!userId ? (
          <Button
            onClick={() => navigate(AUTH_ROUTE)}
            sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}
          >
            Login / Register
          </Button>
        ) : (
          <Button
            onClick={handleSignOut}
            sx={{ flexGrow: 0, display: { xs: 'none', md: 'block' } }}
          >
            Sign Out
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
