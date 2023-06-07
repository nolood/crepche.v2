import { Skeleton } from '@mui/material';

const NavbarSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100%"
      height={62}
      sx={{ position: 'absolute', top: 0 }}
    />
  );
};

export default NavbarSkeleton;
