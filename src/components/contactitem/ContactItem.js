import React from 'react';
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.contact__item}>
      <span className={css.contact__name}>{contact.name}:</span>
      <span className={css.contact__number}>{contact.number}</span>
      <button
        className={css.contact__button}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propType = {
  contact: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func,
};
