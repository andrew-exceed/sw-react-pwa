import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import SignInForm from '../../components/Forms/SignInForm.jsx'
import titles from '../../constants/pageTitles'

export const SignInPage = () => {
    useEffect(() => {
        document.title = titles.SignInPage;
    }, []);

    return(
        <Grid container className='content404'>
            <Grid item xs={12}>
                <SignInForm />
                <code>
                    Сверяемся с данными из локалстораджа
                </code>
            </Grid>
        </Grid>
    )
};

export default SignInPage;