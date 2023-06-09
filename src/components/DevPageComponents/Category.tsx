import {
  Box,
  Button,
  TextField,
} from '@mui/material';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { addCategory } from '../../store/slices/devSlice/devAsync';

const Category = () => {
  const [title, setTitle] = useState<string>('');
  const dispatch = useAppDispatch();
  const handleAddCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.length > 2) {
      dispatch(addCategory(title));
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleAddCategory}
      sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
    >
      <TextField
        placeholder="Название категории"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Button
        type="submit"
        variant="outlined"
        sx={{ height: '100%' }}
      >
        Добавить категорию
      </Button>
    </Box>
  );
};

export default Category;
