import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import MembersList from './components/MembersList';

import './App.css';


function App() {
  const [members, setMembers] = useState([{name: 'Chris', email: 'cladams0203@gmail.com', role: 'student', location: 'sarasota'}])
  const [memberToEdit, setMemberToEdit] = useState({name:'', email: '', role: '', location: ''});

  console.log(memberToEdit)
  const addMember = (newMember) => {

    setMembers([...members, newMember])
  }

  const editMember = (info, id) => {
    setMemberToEdit(info);
    console.log(id)
  }

  return (
    <div className="App">
    <Route path={`/`} component={Home} />
    <Route path={`/members`}  render={props => <MembersList {...props} members={members} editMember={editMember} />} />
    <Route path={`/add-member`} render={props => <Form {...props} addMember={addMember} memberToEdit={memberToEdit} />} />
      
    </div>
  );
}

export default App;
