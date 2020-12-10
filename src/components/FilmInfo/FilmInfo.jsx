import React from 'react';
import {
    Grid,
    Typography,
} from '@material-ui/core';
import moment from 'moment'

import './FilmInfo.scss'

export const FilmInfo = ({ filmData }) => {
    let {title, release_date, producer, director, opening_crawl} = filmData;

    return(
        <>  
        <Grid item xs={12} sm={6}>
            <img title={title} alt={title} className='posterImg' src={`/filmsImg/${title?.split(' ').join('')}.jpg`} ></img>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant='h3'>{title}</Typography>
            <Typography variant='h5'>Director: {director}</Typography>
            <Typography variant='h6'>Producer: {producer}</Typography>
            <Typography variant='h6'>Release: {moment(new Date(release_date)).format("Do MMM YYYY")}</Typography>
            <Typography variant='body2'>{opening_crawl}</Typography>
        </Grid>
        </>
    )
};

export default FilmInfo;