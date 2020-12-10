import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import FilmsList from '../../components/FilmsList/FilmsList'
import allFilmsActions from '../../actions/filmsActions';
import titles from '../../constants/pageTitles';

import './MainPage.scss'

export const MainPage = () => {
    const { filmsList, isLoading, error } = useSelector(state => state.filmsReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        let cleanUp = false;
        document.title = titles.MainPage;
        if(!cleanUp){
            dispatch(allFilmsActions.getFilmsListAction());
            }
        return () => {cleanUp = true};
    }, [dispatch]);

    return(
        <Grid container spacing={2}>
            {error ? 
                <>{error.message}</>
            :
                <>
                    {isLoading ?
                        <div>Loading...</div>
                    :
                        <FilmsList filmsList={filmsList} />
                    }
                </>
            }
        </Grid>
    )
};

export default MainPage;