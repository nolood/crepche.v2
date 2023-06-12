import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { FC } from 'react';
import { List } from '@mui/material';
import { AsideBarItemProps } from '../../types/PropsTypes/AsideBarItemProps';
import { AsideBarSubItem } from '../index';

const Accordion = styled((props: AccordionProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
const AsideBarItem: FC<AsideBarItemProps> = ({
  title, id, subcategories, setActiveCategory,
}) => {
  return (
    <Accordion>
      <AccordionSummary
        onClick={() => setActiveCategory(title, id)}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <List
          sx={{
            padding: 0,
          }}
        >
          {subcategories?.length && subcategories.map((subcategory) => (
            <AsideBarSubItem key={subcategory.id} title={subcategory.title} id={subcategory.id} />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};

export default AsideBarItem;
