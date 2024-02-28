import { useDispatch } from 'react-redux';
import { apiRegisterUser } from '../../redux/auth/authSlice';

import css from '../LoginPage/LoginPage.module.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
const RegisterPage = () => {
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.outlinedName.value;
    const email = e.currentTarget.elements.outlinedEmail.value;
    const password = e.currentTarget.elements.outlinedPassword.value;
    const formData = { name, email, password };
    dispatch(apiRegisterUser(formData));
  };

  const inputProps = {
    required: true,
    minLength: 5,
  };
  return (
    <div className={css.loginFormContainer}>
      <Typography variant="h3" gutterBottom>
        Register
      </Typography>
      <form className={css.loginFormGroup} onSubmit={onSubmit}>
        <TextField
          id="outlinedName"
          label="Name"
          variant="outlined"
          helperText="Please enter your username"
          inputProps={inputProps}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlinedEmail"
          type="email"
          label="Email"
          variant="outlined"
          helperText="Sanches123@ukr.net"
          inputProps={inputProps}
          fullWidth
          margin="normal"
        />
        <TextField
          id="outlinedPassword"
          type="password"
          label="Password"
          variant="outlined"
          helperText="Password must be at least 8 characters long"
          minLength={8}
          fullWidth
          margin="normal"
          sx={{ mb: 2 }}
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

export default RegisterPage;
