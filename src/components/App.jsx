import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getContactsThunk } from '../redux/operations/contactsThunk';
// import { selectContacts } from '../redux/selectors/selectors';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title } from './App.styles';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  // const users = useSelector(selectContacts);
 
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
}
