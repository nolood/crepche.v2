import { FC } from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { AsideBarSubItemProps } from '../../types/PropsTypes/AsideBarItemProps';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { setActiveSubCategory } from '../../store/slices/userSlice';

const AideBarSubItem: FC<AsideBarSubItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  const handleSetSubCategory = () => {
    dispatch(setActiveSubCategory({ title, id }));
  };
  return (
    <ListItem
      sx={{
        padding: 0,
      }}
    >
      <ListItemButton
        onClick={handleSetSubCategory}
      >
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default AideBarSubItem;
