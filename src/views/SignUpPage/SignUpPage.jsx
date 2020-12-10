import React, {  useEffect } from 'react';
import {  Grid } from '@material-ui/core';
import SignUpForm from '../../components/Forms/SignUpForm'
import titles from '../../constants/pageTitles'

export const SignUpPage = () => {

    useEffect(() => {
        document.title = titles.AuthPage;
    }, []);

    return(
        <Grid container className='content404'>
            <Grid item xs={12}>
                <SignUpForm />
                <code>
                    Делаем вид, что регаемся, просто записываем в localstorage
                    (новая регистрация перепишет юзера, по хорошему еще все дизейблить, но я тут не за этим)
                </code>
            </Grid>
        </Grid>
    )
};

export default SignUpPage;