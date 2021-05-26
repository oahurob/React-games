import axios from 'axios';
import {popularGameUrl, upcomingGameUrl, newGameUrl, searchGameURL} from '../api';

//Action Creator

export const loadGames = () => async (dispatch) => {
    const popularData = await axios.get(popularGameUrl());
    const newGamesData = await axios.get(newGameUrl());
    const upcomingData = await axios.get(upcomingGameUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        },
    });
};

export const fetchSearch = (game_name) => async(dispatch) => {
    const searchGames = await axios.get(searchGameURL(game_name))
    dispatch({
        type: 'FETCH_SEARCHED',
        payload:{
            searched: searchGames.data.results,
        },
    })
}