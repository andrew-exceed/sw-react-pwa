import React, { useEffect } from 'react';
import {
    Grid,
    Typography,
    Link as UILink,
} from '@material-ui/core';
import { Link, useHistory } from "react-router-dom";
import titles from '../../constants/pageTitles'

import './NotFoundPage.scss'

export const NotFoundPage = () => {
    let history = useHistory();

    useEffect(() => {
        document.title = titles.NotFoundPage;
        history.push('/404');
    }, [history]);

    return(
        <Grid container className='content404'>
            <Grid item xs={12}>
                <Typography variant='h1'>404 ¡NOT FOUND!</Typography>
                <UILink component={Link} to="/" variant='h3'>to home</UILink>
            </Grid>
        </Grid>
    )
};

export default NotFoundPage;