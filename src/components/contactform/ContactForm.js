import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: [event.target.value].join(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const userContact = this.state.name;
    const userNumber = this.state.number;
    const contact = {
      id: nanoid(),
      name: userContact,
      number: userNumber,
    };
    const doubleContact = this.props.contacts.some(
      ({ name }) => name.toLowerCase() === this.state.name.toLowerCase()
    );

    if (doubleContact) {
      alert(`${this.state.name} is already in contacts`);
      this.reset();
      return;
    } else this.props.addContact(contact);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className={css.form__wrapper}>
        <h1>Phonebook</h1>
        <form className={css.form__body} onSubmit={this.handleSubmit}>
          <label className={css.form__name}>
            Name
            <input
              className={css.input__name}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={css.form__number}>
            Number
            <input
              className={css.input__number}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button className={css.form__button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  addContact: PropTypes.func,
};
