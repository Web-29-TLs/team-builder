import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import MembersList from './components/MembersList';

import './App.css';


function App() {
  const [members, setMembers] = useState([{name: 'Chris', email: 'cladams0203@gmail.com', role: 'student', location: 'sarasota'}])

  const addMember = (newMember) => {

    setMembers([...members, newMember])
  }

  return (
    <div className="App">
    <Route path={`/`} component={Home} />
    <Route path={`/members`}  render={props => <MembersList {...props} members={members} />} />
    <Route path={`/add-member`} render={props => <Form {...props} addMember={addMember} />} />
      
    </div>
  );
}

export default App;
