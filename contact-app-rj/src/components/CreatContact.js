import React from 'react'

const CreateContact = () => {

    const [contacts, setContacts] = React.useState({
        firstName:'',
        lastName:"",
        email:""
    })

    const handleChange = (e) => {
        setContacts({
            ...contacts,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(contacts)
    }



    const {firstName, lastName, email} = contacts;

  return (
    <div>
        <h2>Create Contact</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"  value={firstName} name="firstName" onChange={handleChange} />
            <input type="text" value={lastName} name="lastName" onChange={handleChange} />
            <input type="email" value={email} name="email" onChange={handleChange} />
            <button type='submit'>create</button>
        </form>
    </div>
  )
}

export default CreateContact