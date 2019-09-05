import React, { useState } from 'react';
import Form from './components/Form';

import './App.css';

function App() {
  const [members, setMembers] = useState([])
  console.log(members)
  const addMember = (newMember) => {

    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <Form addMember={addMember} />
    </div>
  );
}

export default App;
