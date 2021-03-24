import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const initialState = {
        credentials: {
            username: "",
            password: ""
        }
    }
    const [state, setState] = useState(initialState);

    const handleChange = e => {
        setState({
            credentials: {
              ...state.credentials,
              [e.target.name]: e.target.value
            }
        })
    }

    const history = useHistory();

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', state.credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('authToken', res.data.payload);
                history.push('/protected');
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input name= "username" id="username" type="text" value={state.credentials.username} onChange={handleChange} />
                <input name= "password" id="password" type="text" value={state.credentials.password} onChange={handleChange} />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login