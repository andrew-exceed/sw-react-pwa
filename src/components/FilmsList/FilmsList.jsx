import React from 'react';
import { 
    Button,
    Grid,
    Typography,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
} 
from '@material-ui/core';
import { Link } from "react-router-dom";
import moment from 'moment'

import './FilmsList.scss'

export const FilmsList = ({ filmsList }) => {
    
    return(
        <>
        {filmsList.map((item, i) => {
            let {title, director, release_date} = item;
            return <Grid item xs={12} sm={6} md={4} lg={3} key={i} >
                <Card >
                    <CardActionArea 
                        component={Link}
                        to={`/film/${i+1}`}
                    >
                        <CardMedia
                            component="img"
                            height='300'
                            // image={`/filmsImg/${title.split(' ').join('')}.jpg`}
                            title={`${title} poster`}
                            alt={`${title} poster`}
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="body1" color="textSecondary">
                                Director: {director}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Release: {moment(new Date(release_date)).format("Do MMM YYYY")}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button
                            component={Link}
                            // Кривоватая апиха, так что перекину индекс
                            to={`/film/${i+1}`}
                            size="small"
                            color="primary"
                        >
                            info as Page
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        })}
        </>
    )
};

export default FilmsList;