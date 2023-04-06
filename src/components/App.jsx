import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsThunk } from '../redux/operations/contactsThunk';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title } from './App.styles';
// import { Loader } from './Loader/Loader';

export function App() {
  const dispatch = useDispatch();
  // const selectIsLoading = state => state.contacts.isLoading;
  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {/* {isLoading ? <Loader /> : <ContactList />} */}
      <ContactList />
    </Container>
  );
}
