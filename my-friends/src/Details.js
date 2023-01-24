import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { fId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${fId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <h3>name : {friend.name}</h3>
            <p>username : {friend.username}</p>
            <p>email : {friend.username}</p>
            <p>phone : {friend.phone}</p>
            <p>website : {friend.website}</p>
        </div>
    );
};

export default Details;