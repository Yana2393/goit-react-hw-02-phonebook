import React from 'react';
import ContactForm from './ContactForm';

export const App = () => {
  return (
    <div
      style={{
        height: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 32,
      }}
    >
      <ContactForm />
    </div>
  );
};
