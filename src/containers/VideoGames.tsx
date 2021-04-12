import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../components/video-games/Sidebar';
import { GameList } from '../components/video-games/GameList';

export const VideoGames = () => {
  const [dataStatus, setDataStatus] = useState(true);
  const [gamesData, setGamesData] = useState([]);
  const [pureData, setPureData] = useState([]);
  useEffect(() => {
    axios.get('http://public.connectnow.org.uk/applicant-test').then((res) => {
      setGamesData(res.data);
      setPureData(res.data);
    });
  }, []);
  const clearFilters = () => {
    setGamesData(pureData);
  };
  const searchGames = (name: string, score: any, order: string) => {
    if (order == '') {
      if (name == '' && score == '') {
        setGamesData(pureData);
      } else if (name !== '') {
        //only name
        setGamesData(pureData);
        const namesData = pureData.filter((n) =>
          n.name.toUpperCase().includes(name.toUpperCase())
        );
        if (namesData.length == 0) {
          setDataStatus(false);
        } else {
          if (score !== '' && score.toString().length !== 1) {
            const scoreAndNamesData = namesData.filter(
              (n) => Number(Math.round(n.rating)) == Number(score)
            );
            if (scoreAndNamesData.length == 0) {
              setDataStatus(false);
              setGamesData([]);
            } else {
              setGamesData(scoreAndNamesData);
            }
          } else {
            setGamesData(namesData);
          }
        }
      } else {
        if (score.toString().length !== 1) {
          //only score
          setGamesData(pureData);
          const data = pureData.filter(
            (n) => Number(Math.round(n.rating)) == Number(score)
          );
          if (data.length == 0) {
            setDataStatus(false);
          }
          setGamesData(data);
        }
      }
    } else {
      switch (order) {
        case 'date':
          if (name !== '' && score == '') {
            //only name with sort date
          } else if (name == '' && score !== '') {
            //only score with sort date
          } else {
            // both name and score sort date
          }
        case 'name':
          if (name !== '' && score == '') {
            //only name with sort name
          } else if (name == '' && score !== '') {
            //only score with sort name
          } else {
            // both name and score sort name
          }
        case 'score':
          if (name !== '' && score == '') {
            //only name with sort score
          } else if (name == '' && score !== '') {
            //only score with sort score
          } else {
            // both name and score sort score
          }
      }
    }
  };
  return (
    <Fragment>
      <div className='video-games-page'>
        <Sidebar searchGames={searchGames} clearFilters={clearFilters} />
        <GameList data={gamesData} dataStatus={dataStatus} />
      </div>
    </Fragment>
  );
};
