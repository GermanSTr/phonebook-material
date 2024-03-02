import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';

import css from './Navigation.module.css';
import { Button } from '@mui/material';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <div className={`${css.navigateMenu} ${!isLoggedIn ? css.isntLogin : ''} `}>
      <NavLink className={css.formButtonHeader} to="/">
        <Button sx={{ color: '#fff' }}>Home</Button>
      </NavLink>
      <div>
        {isLoggedIn ? (
          <NavLink className={css.formButtonHeader} to="/contacts">
            <Button sx={{ color: '#fff' }}>Contacts</Button>
          </NavLink>
        ) : (
          <div>
            <NavLink className={css.formButtonHeader} to="/register">
              <Button sx={{ color: '#fff' }}>Register</Button>
            </NavLink>
            <NavLink className={css.formButtonHeader} to="/login">
              <Button sx={{ color: '#fff' }}>Login</Button>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};
