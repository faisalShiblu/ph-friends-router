import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friends = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();
    const showDetails = (id) => {
        const url = `/friend/${id}`
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid red',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <p>Email : {email}</p>
            <Link to={`/friend/${id}`}>
                <button>Show Details</button>
            </Link>
            <br />
            <button onClick={() => showDetails(id)}>Show</button>
        </div>
    );
};

export default Friends;