import React, {useState} from 'react'
import ListContacts from './components/ListContact'
import CreateContact from './components/CreatContact'
import './App.css'

// cd contact-app-rj
// npm i
// npm start

function App() {
 const initialState = [
  {
    id:1,
    firstName:"Lagu",
    lastName:"longa",
    email:"lagu.e@example.com"
  },
  {
    id:2,
    firstName:"Daniel",
    lastName:"Jada",
    email:"komi.e@example.com"
  },
  {
    id:3,
    firstName:"Justin",
    lastName:"Artema",
    email:"ja_e@example.com"
  }
 ]

 const [contacts, setContacts] = useState(initialState)

 // CRUDL // L

  return (
    <div className="App">
     <h1>Contact App 1.0</h1>
     <ListContacts contacts={contacts}/>
     <CreateContact />
    </div>
  );
}

export default App;
