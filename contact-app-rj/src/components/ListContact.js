import React from "react";

const ListContacts = (props) => {
    return (
        <>
        <h2>List of contacts</h2>

        {
            props.contacts.map(contact => (
                <>
                <p>{contact.id}</p>
                <p>{contact.firstName}</p>
                <p>{contact.email}</p>
                <hr />
                </>
            ))
        }
        </>
    )
}

export default ListContacts;