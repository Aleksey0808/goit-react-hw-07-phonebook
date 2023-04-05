import React from 'react';
import { Contact, Button } from './ContactList.styles';
import { useDispatch, useSelector } from 'react-redux';


import { deleteContactThunk } from '../../redux/operations/contactsThunk';
import { getFilteredContacts } from '../../redux/selectors/selectors';

function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <Contact key={id}>
            {name} - {number}
            <Button onClick={() => dispatch(deleteContactThunk(id))}>Delete</Button>
          </Contact>
        );
      })}
    </ul>
  );
}

export default ContactList;
