import { TextField } from '@mui/material';

const Search = () => {
  return (
    <TextField
      placeholder="Поиск товаров..."
      sx={{
        flexGrow: 1,
        ml: 5,
        mr: 5,
      }}
    />
  );
};

export default Search;
