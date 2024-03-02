import { ContactForm, ContactList, Filter } from 'components';

import css from '../HomePage/HomePage.module.css';
import { Container, Typography } from '@mui/material';
const ContactsPage = () => {
  return (
    <Container>
      <Typography variant="h2" className={css.contactshero}>
        Phonebook
      </Typography>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
