import { FC } from 'react';
import { Stack, Typography } from '@mui/material';
import { GroupItemsProps } from '../../types/PropsTypes/GroupItemsProps';
import CardItem from '../CardItem';
import CardSkeleton from '../CardItem/CardSkeleton';

const GroupItems: FC<GroupItemsProps> = ({ title, items }) => {
  return (
    <>
      <Typography variant="h4" sx={{ mb: 3, textAlign: { xs: 'center' } }}>
        {title}
      </Typography>
      <Stack sx={{
        flexDirection: 'row',
        gap: { xs: 2, md: 5 },
        flexWrap: 'wrap',
        mb: 5,
        justifyContent: 'center',
      }}
      >
        {items.length > 0 ? items.map((item) => (
          <CardItem
            key={item.id}
            activeSubCategory={String(item.subCategoryId)}
            id={item.id}
            title={item.title}
            pack={item.pack}
            price={item.price}
          />
        )) : Array.from({ length: 4 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <CardSkeleton key={index} />
        ))}
      </Stack>
    </>
  );
};

export default GroupItems;
