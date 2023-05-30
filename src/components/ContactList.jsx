import React from 'react';
import ContactItem from './ContactItem'


class ContactList extends React.Component {
  render() {
    return (
      <ul style={{
          padding: 0,
        }}>
            {this.props.filteredContact().map(contact => (
              <ContactItem key={contact.id} contact={contact} deleteContact={this.props.deleteContact} />
            ))}
        </ul>
    );
  }
}

export default ContactList;
