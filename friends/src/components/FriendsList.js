import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Friend from './Friend';

function FriendsList () {
    const [state, setState] = useState({ friends: []})
    useEffect(()=>{
            axiosWithAuth().get("/friends")
              .then(res => 
                {
                  console.log(res)
                setState({
                  ...state, friends: res.data
                })
              }
              )
              .catch(err => console.log(err));
    },[])
    console.log(state)
    return (
        <div>
            {state.friends.map(friend => (
                <Friend friend={friend} />
            ))}
        </div>
    )
}
export default FriendsList