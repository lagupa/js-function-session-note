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

 const appName = "====== Contact app 1.0 ========="


 const [contacts, setContacts] = useState(initialState)
 const [isBlack, setIsBlack] = React.useState(false)

 const handleDarkMode = (arg) => {
  console.log(arg)
  setIsBlack(!isBlack)
 }

 // CRUDL // L
 // Unidirectional: Parent -> child

  return (
    <div style={{padding:"1rem 4rem"}} className="App">
      <button onClick ={handleDarkMode}>{isBlack ? "light mode": "dark mode"}</button>
     <h1>Contact App 1.0</h1>
     <ListContacts handleDarkMode={handleDarkMode}  isBlack = {isBlack} appY = {appName} contacts={contacts}/>
     <CreateContact  isBlack = {isBlack}  appX = {appName} />
    </div>
  );
}



export default App;
