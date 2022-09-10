import React, { useState } from 'react';
import ListContacts from './components/ListContact';
import CreateContact from './components/CreatContact';
import EditContact from './components/EditContact';
import './App.css';

// cd contact-app-rj
// npm i
// npm start

function App() {
  const initialState = [
    {
      id: 1,
      firstName: 'Lagu',
      lastName: 'longa',
      email: 'lagu.e@example.com',
    },
    {
      id: 2,
      firstName: 'Daniel',
      lastName: 'Jada',
      email: 'komi.e@example.com',
    },
    {
      id: 3,
      firstName: 'Justin',
      lastName: 'Artema',
      email: 'ja_e@example.com',
    },
  ];

  const appName = '====== Contact app 1.0 =========';

  const [contacts, setContacts] = useState(initialState);
  const [isBlack, setIsBlack] = React.useState(false);
  const [initialEditContact, setInitialEditContact] = useState({});

  const saveContact = (contact) => {
    // contacts.push(contact) // DON'T do this in react
    setContacts([...contacts, contact]);
  };
  const editContact = (editingContact) => {
    // map
    const tContact = contacts.map((contact) =>
      contact.id === editingContact.id ? editingContact : contact,
    );
    setContacts(tContact);
  };

  const handleDarkMode = (arg) => {
    console.log(arg);
    setIsBlack(!isBlack);
  };

  const [isEditing, setIsEditing] = useState(false);

  const prepulateEditForm = (contact) => {
    console.log('prepulateEditForm');
    setInitialEditContact(contact);
  };

  console.log(initialEditContact);

  // CRUDL //
  // Unidirectional: Parent -> child
  // Create, list
  // Read --- list,

  // Recording Editing Operations
  /*
  - Make an edit button
  - Make edit form
  - Get the id/record the user has selected by clicking edit button
  - Pre-populate edit form fields with selected record/id
  - user makes changes
  - save changes button
  - show the user the edit record
    - show the edited record
    - show pop out successfully edited
  */

  return (
    <div style={{ padding: '1rem 4rem' }} className="App">
      <button onClick={handleDarkMode}>
        {isBlack ? 'light mode' : 'dark mode'}
      </button>
      <h1>Contact App 1.0</h1>
      <ListContacts
        handleDarkMode={handleDarkMode}
        setIsEditing={setIsEditing}
        prepulateEditForm={prepulateEditForm}
        isBlack={isBlack}
        appY={appName}
        contacts={contacts}
      />
      {isEditing ? (
        <EditContact
          editContact={editContact}
          initialEditContact={initialEditContact}
          isBlack={isBlack}
          appX={appName}
        />
      ) : (
        <CreateContact
          saveContact={saveContact}
          isBlack={isBlack}
          appX={appName}
        />
      )}
    </div>
  );
}

export default App;
