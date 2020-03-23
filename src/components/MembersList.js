import React from 'react';
import { Link } from 'react-router-dom';
import MemberCard from './MemberCard';
import styled from 'styled-components';
const CardContainer = styled.div `
    display: flex;
    margin: 0 auto;
    width: 80%;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items:center;
    border: 2px solid black;
`

function MembersList(props) {

    return(
        <CardContainer>
        {props.members.map((item, index) => {

            return(
                <MemberCard key={index} member={item} editMember={props.editMember} id={Date.now()} />
            )
        })}
        <Link to={`/`}>
            <button>Home</button>
        </Link>
        </CardContainer>
    )
    
}
export default MembersList;