import React from 'react';

class ContactItem extends React.Component {
  render() {
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
        {this.props.contact.name} : {this.props.contact.number}
        <button onClick={() => this.props.deleteContact(this.props.contact.id)}
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
}

export default ContactItem;
