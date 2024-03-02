import { useDispatch, useSelector } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/authSlice';
import {
  selectAuthIsLoading,
  selectAuthUserData,
} from '../../redux/auth/authSlice.selectors';

import css from './UserMenu.module.css';
import { Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectAuthUserData);
  const isLoading = useSelector(selectAuthIsLoading);

  const handleLogout = () => dispatch(apiLogoutUser());

  const userEmail = userData?.email ?? 'Could`t get user email';
  return (
    <div className={css.userMenu}>
      <Typography component="div" className={css.userMenuEmail}>
        <div className={css.userMenuIcon}>
          <AccountCircleIcon />
        </div>
        {userEmail}
      </Typography>
      <Button
        sx={{ color: '#fff' }}
        variant="outlined"
        type="button"
        disabled={isLoading}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};
