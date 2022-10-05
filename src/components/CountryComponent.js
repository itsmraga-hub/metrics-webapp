import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './css/CountryComponent.module.css';

const CountryComponent = () => {
  const [statePending, updateState] = useState(false);
  const [All, updateAll] = useState({});
  const state = useSelector((state) => state.cases);
  const { filterCountry, pending } = state;
  useEffect(() => {
    if (!pending) {
      updateAll(filterCountry[0].All);
      updateState(true);
    }
  }, [pending, All]);

  return (
    <>
      {
      statePending ? (
        <div className={style.Container}>
          <Link to={{ pathname: '/' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button type="button"><i className="fa-solid fa-circle-chevron-left fa-2x" /></button>
          </Link>
          <h1>Country statistics</h1>
          <h2>
            {All.country}
            {' '}
            <span>
              (
              {All.abbreviation}
              )
            </span>
          </h2>
          <div>
            <p>
              Continent:
              {' '}
              <span>{All.continent}</span>
            </p>
            <p>
              Capital city:
              {' '}
              <span>{All.capital_city}</span>
            </p>
            <p>
              Location:
              {' '}
              <span>{All.location}</span>
            </p>
            <p>
              Area covered:
              {' '}
              <span>{All.sq_km_area}</span>
            </p>
            <p>
              Population:
              {' '}
              <span>{All.population}</span>
            </p>
            <p>
              Confirmed cases:
              {' '}
              <span>{All.confirmed}</span>
            </p>
            <p>
              Deaths:
              {' '}
              <span>{All.deaths}</span>
            </p>
            <p>
              Last updated:
              {' '}
              <span>{All.updated}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className={style.AwaitContainer}>
          <h1>Fetching data...</h1>
        </div>
      )
      }
    </>
  );
};

export default CountryComponent;
