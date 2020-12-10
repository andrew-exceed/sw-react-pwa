import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import {
    TextField,
    Button
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import allUserActions from '../../actions/userActions'

export const SignInForm = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validateForm, setValidateForm] = useState({
        wrongEmail: false,
        wrongPassword: false,
    })
    let history = useHistory();

    const handleSubmitSignInForm = (e) => {
        e.preventDefault();
        const localEmail = localStorage.getItem('email');
        const localPassword = localStorage.getItem('password');
        setValidateForm({
            wrongEmail: false,
            wrongPassword: false,
        })
        if(email === localEmail && password === localPassword){
            localStorage.setItem('token', 'true');
            dispatch(allUserActions.setUserAction({
                email: localEmail,
                password: localPassword,
                isAuth: true,
            }))
            history.push('/');
        } else {
            setValidateForm({
                wrongEmail: true,
                wrongPassword: true,
            })
        }
    }

    return(
        <form className='formMain' onSubmit={(e) => handleSubmitSignInForm(e)}>
            <TextField 
                type='email'
                required
                error={validateForm.wrongEmail}
                label="Email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <TextField
                type='password'
                required
                error={validateForm.wrongPassword}
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                type='submit'
            >Send</Button>
        </form>
    )
};

export default SignInForm;