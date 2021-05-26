import axios from 'axios';
import {gameDetailsUrl, gameScreeShotUrl} from '../api';

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL",
    });

    const detailData = await axios.get(gameDetailsUrl(id));
    const screenShotData = await axios.get(gameScreeShotUrl(id));

    dispatch({
        type: 'GET_DETAIL',
        payload: {
            game: detailData.data, 
            screen: screenShotData.data,
        },
    }, []);
};