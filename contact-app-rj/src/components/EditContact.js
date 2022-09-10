import React from 'react';

const EditContact = ({ appX, isBlack, editContact, initialEditContact }) => {
  console.log(initialEditContact);

  // Assignments
  // -----
  // UseEffects
  // Unit testing
  // Debugging
  // Delete

  // Next Topic -> Simple JSON server

  const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
  };
  const [contact, setContact] = React.useState(initialFormState);

  React.useEffect(() => {
    setContact(initialEditContact);
  }, [initialEditContact]);

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value, // let's avoid manual wiring.
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // sending to App.js
    editContact(contact);

    // save to database here

    // clear form fields
    setContact(initialFormState);
  };

  const { firstName, lastName, email } = contact;

  return (
    <div>
      <h2>Edit Contact</h2>
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
          <button type="submit">save changes</button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
