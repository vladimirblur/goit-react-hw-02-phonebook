import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputID = uuidv4();
  numberInputID = uuidv4();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.Form}>
        <label htmlFor={this.nameInputID} className={s.label}>
          Name
        </label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={this.state.name}
          id={this.nameInputID}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />

        <label htmlFor={this.numberInputID} className={s.label}>
          Number
        </label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={this.state.number}
          id={this.numberInputID}
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <button type="submit" className="button">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
