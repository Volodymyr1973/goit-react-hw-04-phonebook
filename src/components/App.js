import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { ContactForm } from './contactform/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactlist/ContactList';
import { ContactItem } from './contactitem/ContactItem';
import css from './App.module.css';

export const App = () => {
  // state = {
  //   contacts: [
  //     // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  // };
  const [contacts, setContatcts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length > 0) {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const addContact = contact => {
    setContatcts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContatcts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className={css.phonebook__wrapper}>
      <ContactForm contacts={contacts} addContact={addContact} />

      <div>
        <h2>Contacts</h2>
        <Filter filter={filter} onChangeFilter={changeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter}
          onDeleteContact={deleteContact}
        >
          <ContactItem />
        </ContactList>
      </div>
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
};
