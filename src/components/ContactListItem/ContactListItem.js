import React from 'react';
import { Contact, Button } from './ContactList.styles';
import { useDispatch, useSelector } from 'react-redux';
import {selectIsLoading} from '../../redux/selectors/selectors'


import { deleteContactThunk } from '../../redux/operations/contactsThunk';
import { Loader } from '../Loader/Loader';

export function ContactListItem({ id, name, phone }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <Contact>
      {name} - {phone}
      <Button onClick={() => dispatch(deleteContactThunk(id))} disabled={isLoading}>
        {isLoading && <Loader size={12}/>  }
        Delete
      </Button>
    </Contact>
  );
}
