import React from 'react';
import MemberCard from './MemberCard';

function MembersList(props) {
    console.log(props.members)
    return(
        props.members.map((item, index) => {

            return(
                <MemberCard key={index} member={item} />
            )
        })
    )
    
}
export default MembersList;