import React from 'react';
import MemberCard from './MemberCard';

function MembersList(props) {
    console.log(props.members)
    return(
        props.members.map((item) => {
            console.log(item)

            return(
                <MemberCard member={item} />
            )
        })
    )
    
}
export default MembersList;