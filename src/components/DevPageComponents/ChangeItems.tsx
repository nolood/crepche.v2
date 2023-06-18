import {
  Box, Button, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Stack,
} from '@mui/material';
import { GridRowSelectionModel } from '@mui/x-data-grid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import {
  addFiles, addPopItems, addPromoItems, changeItemsCategory, fetchItems,
} from '../../store/slices/devSlice/devAsync';
import { selectCategories } from '../../store/slices/devSlice/devSelectors';
import { ItemType } from '../../types/ItemType';
import DevTable from './DevTable';

const ChangeItems = () => {
  const [itemsData, setItemsData] = useState<ItemType[]>([]);
  const [subCategoryId, setSubCategoryId] = useState<string>('');
  const [selection, setSelection] = useState<GridRowSelectionModel>([]);
  const categories = useAppSelector(selectCategories);
  const subCategories = categories.flatMap((item) => item.subcategories);
  const dispatch = useAppDispatch();

  const handleSelectionModelChange = (newSelectionModel: GridRowSelectionModel) => {
    setSelection(newSelectionModel);
  };
  const handleAddToSubCategoryItems = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (subCategoryId && selection.length) {
      dispatch(changeItemsCategory({ items: selection, subCategoryId, categories }));
    }
  };
  const handleChange = (event: SelectChangeEvent) => {
    setSubCategoryId(event.target.value as string);
  };
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();
    // @ts-ignore
    fileReader.readAsText(event.target.files[0]);
    fileReader.onload = () => {
      const fileContent = fileReader.result;
      setItemsData(JSON.parse(String(fileContent)));
    };
  };
  const handleAddFiles = () => {
    if (itemsData.length > 5) {
      dispatch(addFiles(itemsData));
    }
  };

  const handleAddPromoItems = () => {
    dispatch(addPromoItems(selection));
  };

  const handleAddPopItems = () => {
    dispatch(addPopItems(selection));
  };

  return (
    <Box>
      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button
          onClick={() => dispatch(fetchItems())}
          variant="outlined"
        >
          Получить данные
        </Button>
        <Box
          component="form"
          onSubmit={handleAddToSubCategoryItems}
        >
          <Button
            type="submit"
            variant="outlined"
            sx={{ height: '100%', mr: 2 }}
            size="small"
          >
            Добавить в подкатегорию
          </Button>
          <FormControl>
            <InputLabel id="category-select">Подкатегория</InputLabel>
            <Select
              labelId="category-select"
              id="demo-simple-select"
              value={subCategoryId}
              label="Age"
              onChange={handleChange}
              sx={{ minWidth: '300px' }}
            >
              {subCategories.map((item) => (
                <MenuItem
                  key={item?.id}
                  value={item?.id}
                >
                  {item?.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Input
            type="file"
            sx={{ margin: '0 20px' }}
            onChange={handleFileInputChange}
          />
          <Button
            variant="outlined"
            sx={{ height: '100%' }}
            onClick={handleAddFiles}
            disabled={itemsData.length === 0}
            size="small"
          >
            Добавить товары
          </Button>
          <Button
            variant="outlined"
            sx={{ height: '100%', mr: 2, ml: 2 }}
            onClick={handleAddPromoItems}
            size="small"
          >
            Добавить в prom
          </Button>
          <Button
            variant="outlined"
            sx={{ height: '100%' }}
            onClick={handleAddPopItems}
            size="small"
          >
            Добавить в pop
          </Button>
        </Box>
      </Stack>
      <DevTable
        selection={handleSelectionModelChange}
        categories={categories}
      />
    </Box>
  );
};

export default ChangeItems;
