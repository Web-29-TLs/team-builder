import React from 'react';

function MemberCard(props) {
   console.log(props.member)

    return(
        <div>
            <h2>Member</h2>
            <p>Name: {props.member.name}</p>
            <p>Email: {props.member.email}</p>
            <p>Role: {props.member.role}</p>
            <p>Location: {props.member.location}</p>

        </div>
    )
}
export default MemberCard;