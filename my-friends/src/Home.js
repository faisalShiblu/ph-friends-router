import React, { useState, useEffect } from 'react';
import Friends from './Friends';

const Home = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, []);

    return (
        <div>
            <h1>Total Friends Count {friends.length}</h1>
            {
                friends.map(f => <Friends friend={f} key={f.id}></Friends>)
            }
        </div>
    );
};

export default Home;