import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {axiosWithAuth} from '../utils/axiosWithAuth';

function FriendForm () {

    const [state, setState] = useState({
        friend: {
            name: "" ,
            age: "",
            email: ""
        }
    })

    const handleChange = e => {
        setState({friend: {
            ...state.friend, [e.target.name] : e.target.value
        }})
    }

    const history = useHistory();

    const addFriend = e => {
        e.preventDefault();
        axiosWithAuth().post('/friends', state.friend)
        .then(res => {
            console.log(res);
            history.push('/protected');
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={addFriend}>
                <label htmlFor="name" /> Name
                <input type="text" name="name" id="name" value={state.friend.name} onChange={handleChange} /><br />
                <label htmlFor="age" /> Age 
                <input type="text" name="age" id="age" value={state.friend.age} onChange={handleChange} /><br/>
                <label htmlFor="email" /> Email
                <input type="text" name="email" id="email" value={state.friend.email} onChange={handleChange} /><br/>
                <button>Add Friend</button>
            </form>
        </div>
    )
}

export default FriendForm