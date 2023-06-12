import { Button, Popover, Typography } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { SortingList } from '../index';
import { useAppSelector } from '../../hooks/useReduxHooks';
import { selectSorting } from '../../store/slices/userSlice/userSelectors';

const SortingPanel = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget as HTMLButtonElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const sortBy = useAppSelector(selectSorting);
  return (
    <>
      <Button
        sx={{
          textTransform: 'none',
          minWidth: '250px',
          justifyContent: 'flex-start',
        }}
        onClick={handleClick}
      >
        Сортировка по:
        <Typography sx={{ ml: 1, borderBottom: '1px dashed' }}>{sortBy.title}</Typography>
        {sortBy.sortBy === 'asc' ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <SortingList />
      </Popover>
    </>
  );
};

export default SortingPanel;
