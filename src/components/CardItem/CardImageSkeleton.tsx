import { Skeleton } from '@mui/material';

const CardImageSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      animation="wave"
      width="100%"
      height="140px"
    />
  );
};

export default CardImageSkeleton;
