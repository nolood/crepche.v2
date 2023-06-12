import { Grid } from '@mui/material';
import CardItem from '../CardItem';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectItems } from '../../store/slices/devSlice/devSelectors';
import { selectActiveCategory, selectActiveSubCategory } from '../../store/slices/userSlice/userSelectors';
import ItemsSortByCategory from '../../utils/ItemsSortByCategory.ts';

const ItemsList = () => {
  const itemsList = useAppSelector(selectItems);
  const activeCategory = useAppSelector(selectActiveCategory);
  const activeSubCategory = useAppSelector(selectActiveSubCategory);
  const items = ItemsSortByCategory(
    itemsList,
    String(activeSubCategory?.id),
    String(activeCategory?.id),
  );
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mt: 3,
        pl: 5,
      }}
    >
      {items.map(({
        id, title, price, pack, subCategoryId,
      }) => (
        <Grid key={id} item>
          <CardItem
            id={id}
            title={title}
            price={price}
            pack={pack}
            activeSubCategory={String(subCategoryId)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ItemsList;
