import * as React from 'react';
import { Fragment, useEffect, useState } from 'react';
import { dateFormatter } from '../../utilities/date';
export interface Props {
  dataStatus: boolean;
  data: Array<{
    id: string;
    first_release_date: number;
    name: string;
    rating: number;
    summary: string;
  }>;
}
export const GameList = (props: Props) => {
  if (props.data.length == 0) {
    return (
      <div className='loader'>
        {props.dataStatus ? 'Loading...' : 'No Data Found'}
      </div>
    );
  }
  return (
    <Fragment>
      <div className='games-section'>
        {props.data.map((game) => {
          return (
            <div key={game.id} className='games-list-area col-2'>
              <div className='black-section col-1'></div>
              <div className='games-list col-2'>
                <h3>{game.name}</h3>
                <span>
                  {`Release Date: ${dateFormatter(game.first_release_date)}`}{' '}
                </span>
                <p>{game.summary}</p>
              </div>
              <div className='rating'>{Math.round(game.rating)}</div>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
