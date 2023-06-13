import {
  Box, Button, FormControl, Input, InputLabel, MenuItem, Select, SelectChangeEvent, Stack,
} from '@mui/material';
import { DataGrid, GridRowSelectionModel, GridValueGetterParams } from '@mui/x-data-grid';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import {
  addFiles, addPopItems, addPromoItems, changeItemsCategory, fetchItems,
} from '../../store/slices/devSlice/devAsync';
import { selectCategories, selectItems } from '../../store/slices/devSlice/devSelectors';
import { ItemType } from '../../types/ItemType';

const ChangeItems = () => {
  const [itemsData, setItemsData] = useState<ItemType[]>([]);
  const [subCategoryId, setSubCategoryId] = useState<string>('');
  const [selection, setSelection] = useState<GridRowSelectionModel>([]);
  const categories = useAppSelector(selectCategories);
  const subCategories = categories.flatMap((item) => item.subcategories);
  const rows = useAppSelector(selectItems);
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

  const DevTableColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 530 },
    { field: 'pack', headerName: 'Pack', width: 130 },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 90,
    },
    {
      field: 'category',
      headerName: 'Category',
      width: 150,
      valueGetter: (params: GridValueGetterParams) => (
        categories.filter((item) => (item.id === params.row.categoryId))[0]?.title
      ),
    },
    {
      field: 'subCategory',
      headerName: 'SubCategory',
      width: 150,
      valueGetter: (params: GridValueGetterParams) => (
        categories.find((item) => item.id === params.row.categoryId)
          ?.subcategories?.find((subItem) => subItem.id === params.row.subCategoryId)?.title),
    },
    { field: 'categoryId', headerName: 'Category Id', width: 100 },
    { field: 'subCategoryId', headerName: 'SubCategory Id', width: 100 },
  ];

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
          >
            Добавить выбранные товары
          </Button>
          <Button
            variant="outlined"
            sx={{ height: '100%', mr: 2, ml: 2 }}
            onClick={handleAddPromoItems}
          >
            Добавить в товары по акции
          </Button>
          <Button
            variant="outlined"
            sx={{ height: '100%' }}
            onClick={handleAddPopItems}
          >
            Добавить в популярные товары
          </Button>
        </Box>
      </Stack>
      <DataGrid
        columns={DevTableColumns}
        rows={rows}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 10]}
        checkboxSelection
        onRowSelectionModelChange={handleSelectionModelChange}
      />
    </Box>
  );
};

export default ChangeItems;
