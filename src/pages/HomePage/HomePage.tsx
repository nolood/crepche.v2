import { Box, Stack } from '@mui/material';
import { AsideBar } from '../../components';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <AsideBar />
      <Stack sx={{ width: '100%' }} />
    </Box>
  );
};

export default HomePage;
