import { TextField } from '@mui/material';
import { ChangeEvent, useCallback, useState } from 'react';
import debounce from 'lodash.debounce';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { setSearch } from '../../store/slices/userSlice';

const Search = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();

  const updateSearchValue = useCallback(debounce((e) => {
    dispatch(setSearch(e.target.value));
  }, 500), []);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    updateSearchValue(e);
    setSearchValue(e.target.value);
  };

  return (
    <TextField
      placeholder="Поиск товаров..."
      value={searchValue}
      onChange={onChangeInput}
      sx={{
        flexGrow: 1,
        ml: 5,
        mr: 5,
      }}
    />
  );
};

export default Search;
