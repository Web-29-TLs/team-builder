import React, { useState } from 'react';
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
      <MembersList members={members} />
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
