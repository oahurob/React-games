//Base URL
const base_url = 'https://api.rawg.io/api/';

//Get Current Month
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if(month < 10){
        return `0${month}`;
    } else {
        return month;
    };
};

//Get Current Day
const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`;
    } else {
        return day;
    };
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

getCurrentMonth();
getCurrentDay();

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_IGNITE_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGameUrl = () => `${base_url}${popular_games}`;
export const upcomingGameUrl = () => `${base_url}${upcoming_games}`;
export const newGameUrl = () => `${base_url}${newGames}`;

//Game Details
export const gameDetailsUrl = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_IGNITE_API}`;
//Game ScreenShots
export const gameScreeShotUrl = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_IGNITE_API}`;

//Search game

export const searchGameURL = (game_name) => `${base_url}games?key=${process.env.REACT_APP_IGNITE_API}&search=${game_name}&page_size=9`;