import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { SortingLIstItemsType } from '../types/SortingLIstItemsType';

const SortingListItems: SortingLIstItemsType[] = [
  {
    id: 2,
    title: 'алфавиту',
    sortBy: 'desc',
    Icon: ArrowDropDownIcon,
  },
  {
    id: 3,
    title: 'алфавиту',
    sortBy: 'asc',
    Icon: ArrowDropUpIcon,
  },
  {
    id: 0,
    title: 'цене',
    sortBy: 'desc',
    Icon: ArrowDropDownIcon,
  },
  {
    id: 1,
    title: 'цене',
    sortBy: 'asc',
    Icon: ArrowDropUpIcon,
  },
];

export default SortingListItems;
