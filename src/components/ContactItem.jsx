import React from 'react';
import PropTypes from 'prop-types';

function ContactItem ({contact, deleteContact}) {
    return (
      <li style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        margin: '10px',
        border: '1px solid black',
        borderRadius: '5px',
        color: 'black',
      }}>
        {contact.name} : {contact.number}
        <button onClick={() => deleteContact(contact.id)}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            padding: '5px',
            margin: '10px',
            borderRadius: '5px',
            cursor: 'pointer'
        }}>Delete</button>
      </li>
    );
  
}

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
