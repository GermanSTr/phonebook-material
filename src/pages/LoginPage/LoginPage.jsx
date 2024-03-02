import { useDispatch } from 'react-redux';
import { apiLoginUser } from '../../redux/auth/authSlice';

import css from './LoginPage.module.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const LoginPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const email = e.currentTarget.elements.userEmail.value;
    const password = e.currentTarget.elements.userPassword.value;
    const formData = { email, password };
    dispatch(apiLoginUser(formData));
  };

  const inputProps = {
    required: true,
    minLength: 7,
  };

  return (
    <div className={css.loginFormContainer}>
      <Typography variant="h3" gutterBottom>
        Login
      </Typography>
      <form className={css.loginFormGroup} onSubmit={onSubmit}>
        <TextField
          id="userEmail"
          type="email"
          label="Email"
          variant="outlined"
          helperText="Sanches123@ukr.net"
          inputProps={inputProps}
          fullWidth
          margin="normal"
        />
        <TextField
          id="userPassword"
          type="password"
          label="Password"
          variant="outlined"
          helperText="Password must be at least 8 characters long"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
          inputProps={inputProps}
        />
        <Box
          sx={{
            textAlign: 'center',
            height: '100vh',
          }}
        >
          <Button type="submit" variant="contained" endIcon={<SendIcon />}>
            Sign up
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginPage;
