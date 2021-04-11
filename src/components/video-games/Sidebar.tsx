import * as React from 'react';
import { Fragment, useState } from 'react';

export const Sidebar = (props: any) => {
  const [name, setName] = useState('');
  // const onChange = (e: any) => {
  //   setName(e.target.value);
  // };
  return (
    <Fragment>
      <div className='filter-section col-1'>
        <div className='filter-card'>
          <div className='heading'>
            <h3>Filter Results</h3>
          </div>
          <div className='name'>
            <label>{`Name (contains)`}</label>
            <input
              type='text'
              required
              autoComplete='off'
              onKeyPress={(e: any) => {
                e.keyCode == 13 && console.log('Hello World');
              }}
              onChange={(e: any) => props.searchGame(e.target.value)}
            ></input>
          </div>
          <div className='score'>
            <label>Minimum Score</label>
            <input
              type='number'
              placeholder='1-10'
              required
              autoComplete='off'
            ></input>
          </div>
          <div className='order'>
            <label>Order By</label>
            <select>
              <option value='date'>Release Date</option>
              <option value='score'>Score</option>
              <option value='name'>Name</option>
            </select>
          </div>
          <div className='clear-button'>
            <button type='button'>Clear</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
