import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import FilmInfo from '../../components/FilmInfo/FilmInfo'
import allFilmsActions from '../../actions/filmsActions';
import titles from '../../constants/pageTitles'

import './FilmPage.scss'

export const FilmPage = () => {
    //Вообще на запросе всех фильмов у нас есть ВСЯ инфа по каждому фильму
    //но я делаю вид, что это не так, и делаю запрос к конкретному фильмы
    const { filmInfo, isLoading, error } = useSelector(state => state.filmsReducer);
    const dispatch = useDispatch();
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        document.title = `${titles.FilmPage} ${filmInfo?.title}`;
    }, [filmInfo?.title]);

    useEffect(() => {
        let cleanUp = false;
        if(!cleanUp){
            dispatch(allFilmsActions.getFilmInfoAction(id));
        }
        return () => {cleanUp = true};
    }, [id, history, dispatch]);

    

    return(
        <Grid container spacing={1}>
            {error ? 
                <>{error.message}</>
            :
                <>
                    {isLoading ?
                        <div>Loading...</div>
                    :
                    <FilmInfo filmData={filmInfo} />
                    }
                </>
            }
        </Grid>
    )
};

export default FilmPage;