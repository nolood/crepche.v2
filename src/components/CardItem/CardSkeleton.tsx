import { Skeleton } from '@mui/material';

const CardSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="350px"
      height="300px"
    />
  );
};

export default CardSkeleton;
