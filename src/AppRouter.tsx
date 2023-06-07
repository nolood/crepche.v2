import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { authRoutes, publicRoutes } from './routes';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks';
import { setIsAuth, setUserId } from './store/slices/userSlice';
import { selectIsAuth } from './store/slices/userSlice/userSelectors';

const AppRouter = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUserId(user.uid));
        dispatch(setIsAuth(true));
      } else {
        dispatch(setUserId(''));
        dispatch(setIsAuth(false));
      }
    });
    return unsubscribe;
  }, []);
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={(<Component />)}
        />
      ))}

      {isAuth && authRoutes.map(({ path, Component }) => (
        <Route
          key={path}
          path={path}
          element={(<Component />)}
        />
      ))}
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default AppRouter;
