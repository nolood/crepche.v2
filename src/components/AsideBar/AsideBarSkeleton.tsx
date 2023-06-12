import { Skeleton } from '@mui/material';

const AsideBarSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="300px"
      height="calc(100vh - 300px)"
    />
  );
};

export default AsideBarSkeleton;
