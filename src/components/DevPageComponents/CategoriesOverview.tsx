import {
  List, ListItem, ListItemText, Stack, Chip, Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectCategories } from '../../store/slices/devSlice/devSelectors';
import { deleteCategory, deleteSubCategory } from '../../store/slices/devSlice/devAsync';

const CategoriesOverview = () => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const handleDeleteCategory = (id: string) => {
    dispatch(deleteCategory(id));
  };
  const handleDeleteSubCategory = (parentId: string, id: string) => {
    dispatch(deleteSubCategory({ parentId, id }));
  };
  return (
    <List>
      {categories.map((category) => (
        <ListItem
          key={category.id}
          sx={{ padding: '20px', borderBottom: '1px solid gray' }}
        >
          <Button
            sx={{ mr: 2 }}
            onClick={() => handleDeleteCategory(category.id)}
          >
            <DeleteIcon />
          </Button>
          <ListItemText
            primary={category.title}
            sx={{ flexGrow: 0, minWidth: 150 }}
          />
          <Stack
            direction="row"
            sx={{ gap: '10px', flexWrap: 'wrap' }}
          >
            {category.subcategories && category.subcategories.map((subCategory) => (
              <Chip key={subCategory.id} label={subCategory.title} color="primary" onDelete={() => handleDeleteSubCategory(category.id, subCategory.id)} />
            ))}
          </Stack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesOverview;
