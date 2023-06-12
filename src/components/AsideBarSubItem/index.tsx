import { FC } from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AsideBarSubItemProps } from '../../types/PropsTypes/AsideBarItemProps';
import { useAppDispatch } from '../../hooks/useReduxHooks';
import { setActiveSubCategory } from '../../store/slices/userSlice';
import { CATALOG_ROUTE } from '../../utils/consts';

const AideBarSubItem: FC<AsideBarSubItemProps> = ({ id, title }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSetSubCategory = () => {
    dispatch(setActiveSubCategory({ title, id }));
    navigate(CATALOG_ROUTE);
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
