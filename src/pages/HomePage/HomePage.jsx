import { Box, Container, Typography } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" sx={{ textAlign: 'center', mt: '100px' }}>
        WELCOME
      </Typography>
      <Box>
        <Typography>
          Dear user, welcome to this page. You have a great opportunity to
          create your own phonebook that will be accessible at any time. To
          create your personal profile, you need to register on the "Register"
          page. You can view your contacts on the "Contacts" page after
          authorization. Enjoy your experience.
        </Typography>
      </Box>
    </Container>
  );
};

export default HomePage;
