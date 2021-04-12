import * as React from 'react';
import { Fragment, useState, useEffect } from 'react';

export const Sidebar = (props: any) => {
  const [formData, setFormData] = useState({
    name: '',
    score: '',
    order: '',
  });
  const { name, score, order } = formData;
  useEffect(() => {
    props.searchGames(name, score, order);
  }, [formData]);
  const onChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
              name='name'
              value={name}
              onChange={onChange}
              autoComplete='off'
            ></input>
          </div>
          <div className='score'>
            <label>Minimum Score</label>
            <input
              type='number'
              name='score'
              autoComplete='off'
              value={score}
              placeholder='1-100'
              required
              onChange={onChange}
            ></input>
          </div>
          <div className='order'>
            <label>Order By</label>
            <select id='select' name='order' onChange={onChange}>
              <option defaultValue='date'>Release Date</option>
              <option value='score'>Score</option>
              <option value='name'>Name</option>
            </select>
          </div>
          <div className='clear-button'>
            <button
              type='button'
              onClick={() => {
                props.clearFilters();
                setFormData({ ...formData, name: '', score: '', order: '' });
              }}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
