import { Fab } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectShowCategories } from '../../store/slices/userSlice/userSelectors';
import { setShowCategories } from '../../store/slices/userSlice';

const MobileFloatingButton = () => {
  const dispatch = useAppDispatch();
  const showCategory = useAppSelector(selectShowCategories);
  return (
    <Fab
      color="primary"
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        top: '50px',
        right: '20px',
      }}
      onClick={() => dispatch(setShowCategories(!showCategory))}
    >
      <CategoryIcon />
    </Fab>
  );
};

export default MobileFloatingButton;
