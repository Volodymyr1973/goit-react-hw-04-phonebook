import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactList.module.css';
import { ContactItem } from 'components/contactitem/ContactItem';

export const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <ul className={css.contact__list}>
        {visibleContacts.length > 0 &&
          visibleContacts.map(contact => (
            <ContactItem
              contact={contact}
              onDeleteContact={onDeleteContact}
              key={nanoid()}
            />
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
