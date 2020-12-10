import React, { useState } from 'react';
import {
    TextField,
    Button,
} from '@material-ui/core';
import { useHistory } from "react-router-dom";

import './forms.scss'

export const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [validateForm, setValidateForm] = useState({
        wrongEmail: false,
        wrongPassword: false,
        wrongConfirm: false,
    })
    let history = useHistory();

    const handleSubmitAuthForm = (e) => {
        e.preventDefault();
        if(password !== confirm) {
            setValidateForm({
                ...validateForm,
                wrongConfirm: true,
            })
            return null
        }
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        history.push('/signIn')
    }

    return(
        <form className='formMain' onSubmit={(e) => handleSubmitAuthForm(e)}>
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
            <TextField
                type='password'
                required
                error={validateForm.wrongConfirm}
                helperText={validateForm.wrongConfirm && 'incorrect'}
                label="Confirm password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
            />
            <Button variant="contained" color="primary" type='submit'>Send</Button>
        </form>
    )
};

export default SignUpForm;