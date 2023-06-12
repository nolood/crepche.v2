import { Box, Stack } from '@mui/material';
import { AsideBar, Search, SortingPanel } from '../../components';

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <AsideBar />
      <Stack sx={{ width: '100%' }}>
        <Stack direction="row">
          <Search />
          <SortingPanel />
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
