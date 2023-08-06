import React, {useState} from 'react'
import SearchAppBar from './components/Appbar'
import data from './data.json'
import { ContactType } from './types'
import ContactsTable from './components/ContactsTable';
import LeftDrawer from './components/LeftDrawer';
import NewContact from './components/NewContact';
import { Button } from '@mui/material';
function App() {
    const contactList: ContactType[] = data;
    const [showDrawer, setShowDrawer] = useState(false)
    // const [pages, setpages] = useState([
    //   {
    //     route:"newcontact",
    //     show:false,
    //     page: <NewContact />
    //   }
    // ])
    const [page, setPage] = useState(<ContactsTable data = {contactList}/>)
  return (
    <div>
        <SearchAppBar onMenuClick={()=>{setShowDrawer(!showDrawer)}}/>
        <div style={{display:'flex', minHeight:'93vh'}}>
          <LeftDrawer show={showDrawer} height={10} width={20}>
            <Button onClick={()=>setPage(<NewContact />)}>Create</Button>
            <Button onClick={()=>setPage(<ContactsTable data = {contactList}/>)}>All contacts</Button>
            <Button>Frequent</Button>
          </LeftDrawer>
          {page}
        </div>
    </div>
  )
}

export default App