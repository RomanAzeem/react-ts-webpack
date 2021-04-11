import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../components/video-games/Sidebar';
import { GameList } from '../components/video-games/GameList';

export const VideoGames = () => {
  const [gamesData, setGamesData] = useState([]);
  useEffect(() => {
    axios
      .get('http://public.connectnow.org.uk/applicant-test')
      .then((res) => setGamesData(res.data));
  }, []);
  const filterGames = (name: string, score: number, order: string) => {
    console.log(name);
    const games = gamesData.filter((game) =>
      game.name.toUpperCase().includes(name.toUpperCase())
    );
    console.log(games);
  };
  return (
    <Fragment>
      <div className='video-games-page'>
        <Sidebar searchGame={filterGames} />
        <GameList data={gamesData} />
      </div>
    </Fragment>
  );
};
