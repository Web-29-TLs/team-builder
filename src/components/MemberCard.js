import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div `
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    background-color:lightgreen;
    padding-bottom: 20px;
    border-radius: 1rem;
`
const Span = styled.span `
    font-weight: bold;
`

function MemberCard(props) {
   console.log(props.member)
    const { name, email, role, location } = props.member
    return(
        <CardDiv>
            <h2>Member</h2>
            <div><Span>Name: </Span>{name}</div>
            <div><Span>Email: </Span>{email}</div>
            <div><Span>Role: </Span>{role}</div>
            <div><Span>Location: </Span>{location}</div>

        </CardDiv>
    )
}
export default MemberCard;