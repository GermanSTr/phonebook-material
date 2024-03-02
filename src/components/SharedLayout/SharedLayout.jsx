import { Loader, Navigation, UserMenu } from 'components';

import { Suspense } from 'react';
import { useSelector } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';

import css from './SharedLayout.module.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const SharedLayout = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ mr: '20px' }}>
            MyPhobs
          </Typography>
          <Navigation />
          {isLoggedIn && <UserMenu />}
        </Toolbar>
      </AppBar>

      <div className={css.mainBlock}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
      <main>{children}</main>
    </div>
  );
};
