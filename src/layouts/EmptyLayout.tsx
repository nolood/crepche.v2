import { FC } from 'react';
import { MainLayoutProps } from '../types/PropsTypes/MainLayoutProps';

const EmptyLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      empty
      {children}
    </>
  );
};

export default EmptyLayout;
