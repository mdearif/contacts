import React from 'react'
import SearchAppBar from './components/Appbar'
import data from './data.json'
import { ContactType } from './types'
import ContactsTable from './components/ContactsTable';
function App() {
    const contactList: ContactType[] = data;
  return (
    <div>
        <SearchAppBar />
        <ContactsTable data = {contactList}/>
    </div>
  )
}

export default App