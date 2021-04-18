import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from '../components/video-games/Sidebar';
import { GameList } from '../components/video-games/GameList';

export const VideoGames = () => {
  const [dataStatus, setDataStatus] = useState(true);
  const [gamesData, setGamesData] = useState([]);
  const [pureData, setPureData] = useState([]);
  let another: any = [];
  useEffect(() => {
    axios.get('http://public.connectnow.org.uk/applicant-test').then((res) => {
      setGamesData(res.data);
      for (let i = 0; i < res.data.length; i++) {
        another[i] = res.data[i];
      }
      localStorage.setItem('data', JSON.stringify(another));
      setPureData(another);
    });
  }, []);
  const clearFilters = () => {
    setPureData(JSON.parse(localStorage.getItem('data')));
  };
  const setFilter = (name: string, score: any, dataArray: any) => {
    if (name == '' && score == '') {
      setGamesData(dataArray);
    } else if (name !== '') {
      //only name
      setGamesData(dataArray);
      const namesData = dataArray.filter((n: any) =>
        n.name.toUpperCase().includes(name.toUpperCase())
      );
      if (namesData.length == 0) {
        setDataStatus(false);
        setGamesData([]);
      } else {
        if (score !== '' && score.toString().length !== 1) {
          const scoreAndNamesData = namesData.filter(
            (n: any) => Number(Math.round(n.rating)) == Number(score)
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
        setGamesData(dataArray);
        const data = dataArray.filter(
          (n: any) => Number(Math.round(n.rating)) == Number(score)
        );
        if (data.length == 0) {
          setDataStatus(false);
        }
        setGamesData(data);
      }
    }
  };
  const searchGames = async (name: string, score: any, order: string) => {
    if (order == '') {
      setFilter(name, score, pureData);
    } else {
      const data = pureData;
      if (order == 'score') {
        const sortedData = await data
          .sort((a, b) => {
            return a.rating - b.rating;
          })
          .slice();
        setFilter(name, score, sortedData);
      }
      if (order == 'name') {
        const sortedData = data
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .slice();
        setFilter(name, score, sortedData);
      }
      if (order == 'date') {
        const sortedData = data
          .sort((a, b) => {
            return b.first_release_date - a.first_release_date;
          })
          .slice();

        setFilter(name, score, sortedData);
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
