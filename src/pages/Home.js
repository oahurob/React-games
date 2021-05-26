import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
//Redux
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesAction';
//components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';
//style
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';

const Home = () => {
  //get current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];


    //Fetch games
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  const {popular, newGames, upcoming, searched} = useSelector((state) => state.games);
  
  return(
    <GameList>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {searched.length ?  (
          <div className='searched'>
          <h1>Searched Games</h1>
                <Games>
                  {searched.map(game => (
                    <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
                  ))}
                </Games>
            </div>
          ) : ''}
        {pathId && <GameDetail pathId={pathId}/>}</AnimatePresence>
            <h1>Upcoming Games</h1>
            <Games>
              {upcoming.map(game => (
                <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
              ))}
            </Games>
            <h1>Popular Games</h1>
            <Games>
              {popular.map(game => (
                <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
              ))}
            </Games>
            <h1>New Games</h1>
            <Games>
              {newGames.map(game => (
                <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id}/>
              ))}
            </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
  h1{
    padding: 5rem 0rem;
    text-decoration: underline;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;