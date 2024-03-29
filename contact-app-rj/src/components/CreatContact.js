import React from 'react';

const CreateContact = ({ appX, isBlack, saveContact }) => {
  const initalFormState = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const [contact, setContact] = React.useState(initalFormState);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending to App.js
    saveContact(contact);

    // save to database here

    // clear form fields
    setContact(initalFormState);
  };

  const { firstName, lastName, email } = contact;

  return (
    <div>
      {appX}
      <h2>Create Contact</h2>
      <div
        style={{
          background: isBlack ? 'black' : null,
          color: isBlack ? 'white' : null,
          padding: '1rem',
        }}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            name="firstName"
            onChange={handleChange}
          />
          <input
            type="text"
            value={lastName}
            name="lastName"
            onChange={handleChange}
          />
          <input
            type="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <button type="submit">create</button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
