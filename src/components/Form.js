import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Form(props) {
    const [input, setInput] = useState({name:'', email: '', role: '', location: ''})
    console.log(props)
    useEffect(() => {
        setInput(props.memberToEdit);
    }, [props.memberToEdit])

    const handleChange = event => {
        setInput({...input, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMember(input)
        setInput({name:'', email: '', role: '', location: ''})
    }

    return (
        <div>
            <form onSubmit={(event) => handleSubmit(event)}>
            <h2>Add a Member</h2>
                <label>Name:
                    <input type='text' name='name' value={input.name} onChange={(event) => handleChange(event)} ></input>
                </label>
                <label>Email: 
                    <input type='email' name='email' value={input.email} onChange={(event) => handleChange(event)}></input>
                </label>
                <label>Role: 
                    <input type='text' name='role' value={input.role} onChange={(event) => handleChange(event)}></input>
                </label>
                <label>Location: 
                    <input type='text' name='location' value={input.location} onChange={(event) => handleChange(event)}></input>
                </label>
                <button type='submit' >Submit</button>
            </form>
            <Link to={`/`}>
                <button>Home</button>
            </Link>
        </div>
    )
}
export default Form;