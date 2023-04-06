import React from 'react';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';

function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <ul>
      {contacts.map(contacts => (
        <ContactListItem key={contacts.id} {...contacts} />
      ))}
    </ul>
  );
}

export default ContactList;
