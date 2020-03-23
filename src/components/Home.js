import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <div>
            <h1>Welcome to the Members list!</h1>
            <h3>Please feel free to join!</h3>
            <Link to={`/members`}>
            <button>Members</button>
            </Link>
            <Link to={`/add-member`}>
            <button>Join</button>
            </Link>
        </div>
    )
}

export default Home;