import {
  Button,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  TextField,
  Box,
} from '@mui/material';
import { FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { addSubCategory } from '../../store/slices/devSlice/devAsync';
import { selectCategories } from '../../store/slices/devSlice/devSelectors';

const SubCategory = () => {
  const [categoryId, setCategoryId] = useState<string>('');
  const [subCategoryTitle, setSubCategoryTitle] = useState<string>('');
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent) => {
    setCategoryId(event.target.value as string);
  };

  const addNewSubCategory = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (categoryId && subCategoryTitle) {
      dispatch(addSubCategory({ title: subCategoryTitle, parentId: categoryId }));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <Box component="form" onSubmit={addNewSubCategory}>
        <TextField
          placeholder="Название подкатегории"
          value={subCategoryTitle}
          onChange={(e) => setSubCategoryTitle(e.target.value)}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{ ml: 2, height: '100%' }}
        >
          Добавить подкатегорию
        </Button>
      </Box>
      <FormControl>
        <InputLabel id="category-select">Категория</InputLabel>
        <Select
          labelId="category-select"
          id="demo-simple-select"
          value={categoryId}
          label="Age"
          onChange={handleChange}
          sx={{ minWidth: '100%' }}
        >
          {categories.length && categories.map(({ id, title }) => (
            <MenuItem key={id} value={id}>{title}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SubCategory;
