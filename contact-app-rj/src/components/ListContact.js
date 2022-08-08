import React from "react";

const ListContacts = ({ appY, isBlack, contacts}) => {

    return (
        <>
        <h2>List of contacts</h2>
        <div style = {{
            background:isBlack ? "black": null,
            color: isBlack ? "white": null
        }}>
        {
            appY
        }

        {
            contacts.map(({id, firstName, email}, index) => (
                <>
                <p>{id}</p>
                <p>{firstName}</p>
                <p>{email}</p>
                <hr />
                </>
            ))
        }
        </div>
        <Boo isBlack={isBlack} />
        </>
    )
}

export default ListContacts;


const Boo = ({isBlack}) => {
    return (
        <div>

            <h1 style = {{
            background:isBlack ? "black": null,
            color: isBlack ? "white": null
        }} >Determine Boo</h1>
        </div>
    )
}