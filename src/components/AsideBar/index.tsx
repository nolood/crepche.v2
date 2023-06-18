import { Box, Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AsideBarItem } from '../index';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { selectCategories } from '../../store/slices/devSlice/devSelectors';
import { fetchCategories } from '../../store/slices/devSlice/devAsync';
import AsideBarSkeleton from './AsideBarSkeleton';
import { setActiveCategory } from '../../store/slices/userSlice';
import { CATALOG_ROUTE } from '../../utils/consts';
import { selectShowCategories } from '../../store/slices/userSlice/userSelectors';

const AsideBar = () => {
  const categories = useAppSelector(selectCategories);
  const showCategories = useAppSelector(selectShowCategories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSetActiveCategory = (title: string, id: string) => {
    dispatch(setActiveCategory({ title, id }));
    navigate(CATALOG_ROUTE);
  };
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <Box
      sx={{
        maxWidth: '300px',
        height: 'max-content',
        display: { xs: `${!showCategories ? 'none' : 'block'}`, md: 'block' },
        position: { xs: 'absolute', md: 'static' },
        right: 0,
        top: '100px',
        zIndex: 100,
        backgroundColor: { xs: '#272727' },
      }}
    >
      {categories.length > 0
        ? categories.map(({ title, id, subcategories }) => (
          <React.Fragment key={id}>
            {subcategories && subcategories[0].title !== 'null'
              ? (
                <AsideBarItem
                  title={title}
                  subcategories={subcategories}
                  id={id}
                  setActiveCategory={handleSetActiveCategory}
                />
              )
              : (
                <Button
                  onClick={() => handleSetActiveCategory(title, id)}
                  sx={{
                    backgroundColor: '#121212',
                    width: '100%',
                    justifyContent: 'flex-start',
                    textTransform: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderBottom: 'none',
                    padding: '12px',
                    color: '#ffffff',
                    borderRadius: '0',
                  }}
                >
                  {title}
                </Button>
              )}
          </React.Fragment>
        ))
        : <AsideBarSkeleton />}
    </Box>
  );
};

export default AsideBar;
