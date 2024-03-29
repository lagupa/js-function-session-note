import React from 'react';
import ReadContactDetails from './ReadContactDetails';

const ListContacts = ({
  appY,
  isBlack,
  contacts,
  setIsEditing,
  prepulateEditForm,
}) => {
  const [isDetails, setIsDetail] = React.useState(false);
  const [contact, setContact] = React.useState({});
  const readDetails = (e, contact) => {
    // console.log("Hello daniel!!", id)
    setIsDetail(true);
    setContact(contact);
  };
  const goBackToListView = () => {
    setIsDetail(false);
  };

  const handleEditMode = (e, contact) => {
    setIsEditing(true);
    prepulateEditForm(contact);
  };

  return (
    <>
      {isDetails ? (
        <ReadContactDetails
          goBackToListView={goBackToListView}
          contact={contact}
        />
      ) : (
        <div>
          <h2>List of contacts</h2>
          <div
            style={{
              background: isBlack ? 'black' : null,
              color: isBlack ? 'white' : null,
            }}
          >
            {appY}

            {contacts.map(({ id, firstName, email }, index, arr) => (
              <div key={id}>
                <p>{firstName}</p>
                <button
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={(e) => readDetails(e, arr[index])}
                >
                  view record details
                </button>
                <button
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={(e) => handleEditMode(e, arr[index])}
                >
                  edit record
                </button>
                <button
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  delete record
                </button>
                <hr />
              </div>
            ))}
          </div>
          <Boo isBlack={isBlack} />
        </div>
      )}
    </>
  );
};

export default ListContacts;

const Boo = ({ isBlack }) => {
  return (
    <div>
      <h1
        style={{
          background: isBlack ? 'black' : null,
          color: isBlack ? 'white' : null,
        }}
      >
        Determine Boo
      </h1>
    </div>
  );
};
