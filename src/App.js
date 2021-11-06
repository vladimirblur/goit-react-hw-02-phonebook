import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = info => {
    const contact = {
      id: uuidv4(),
      ...info,
    };

    if (this.verifyDuplication(contact)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };

  verifyDuplication = contact => {
    const { contacts } = this.state;

    return contacts.find(({ name }) => name === contact.name);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  handleContactDelete = contactID => {
    return this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactID),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onContactDelete={this.handleContactDelete}
        />
      </Container>
    );
  }
}

export default App;
