import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter'

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  filteredContact = () => this.state.contacts.filter(contact => {
    return contact.name.toLowerCase().includes(this.state.filter);
  });

  handleFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  addNewContact = (newContact) => {
    if (this.state.contacts.some(contact => contact.name === newContact.name)) {
      return alert(`${newContact.name} is already in contacts!`);
    };
    this.setState((oldState) => ({
      contacts: [...oldState.contacts, newContact],
      filter: ''
    }))
  }

  deleteContact = (contactId) => { 
    this.setState((oldState) => ({
      contacts: oldState.contacts.filter(c => c.id!== contactId),
      filter: ''
    }))
  }

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 20,
        }}>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} filterChange={this.handleFilterChange} />
        <ContactList filteredContact={this.filteredContact} deleteContact={this.deleteContact} />
      </div>
    );
  }
}

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  )
};