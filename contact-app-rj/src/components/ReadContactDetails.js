const ReadContactDetails = (props) => {

    const {id,firstName, lastName,email} = props.contact

    console.log("ReadContactDetails:")
    console.log(firstName)

    return (
      <div>
        <h2>Contact Details</h2>
        <p>{id}</p>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
        <hr />
        <button onClick={props.goBackToListView}>Back</button>
      </div>
    )
  }

export default ReadContactDetails