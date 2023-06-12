// eslint-disable-next-line import/no-unresolved
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

export type SortingLIstItemsType = {
  id: number,
  title: string,
  sortBy: string,
  Icon: OverridableComponent<SvgIconTypeMap>
}
