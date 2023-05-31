import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem'


function ContactList({filteredContact, deleteContact}) {
    return (
      <ul style={{
          padding: 0,
        }}>
            {filteredContact().map(contact => (
              <ContactItem key={contact.id} contact={contact} deleteContact={deleteContact} />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
  filteredContact: PropTypes.func,
  deleteContact: PropTypes.func,
};

export default ContactList;
