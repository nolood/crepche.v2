import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText,
} from '@mui/material';
import SortingListItems from '../../utils/SortingListItems';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { setSorting } from '../../store/slices/userSlice';

const SortingList = () => {
  const dispatch = useAppDispatch();
  const handleSelectSortedBy = (title: string, sortBy: string) => {
    dispatch(setSorting({ title, sortBy }));
  };
  return (
    <List>
      {SortingListItems.map(({
        title, sortBy, Icon, id,
      }) => (
        <ListItem key={id}>
          <ListItemButton
            onClick={() => handleSelectSortedBy(title, sortBy)}
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default SortingList;
