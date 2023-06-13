import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { authRoutes, protectRoutes, publicRoutes } from './routes';
import NotfoundPage from './pages/NotfoundPage/NotfoundPage';
import { useAppDispatch, useAppSelector } from './hooks/useReduxHooks';
import { setIsAuth, setUserId } from './store/slices/userSlice';
import { selectId, selectIsAuth } from './store/slices/userSlice/userSelectors';

const AppRouter = () => {
  const isAuth = useAppSelector(selectIsAuth);
  const userId = useAppSelector(selectId);
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
      {String(userId) === 'QgAP31Uz9lgAA3LXU3S9w6aG5Ue2' || String(userId) === 'KmlIbfY6VBQQEj42RcgsE36k9Tp2'
        ? protectRoutes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={(<Component />)}
          />
        )) : null}
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  );
};

export default AppRouter;
