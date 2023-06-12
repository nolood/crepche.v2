import { Box, Stack } from '@mui/material';
import {
  AsideBar, ItemsList, Search, SortingPanel,
} from '../../components';

const CatalogPage = () => {
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
        <ItemsList />
      </Stack>
    </Box>
  );
};

export default CatalogPage;
