/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable camelcase */
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchsingleCountryInfo } from '../redux/covidcases';
import style from './css/Case.module.css';

const Case = (props) => {
  const coun = props;
  const { country } = coun;
  const { abbreviation, id, life_expectancy } = country;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(fetchsingleCountryInfo(e.target.id));
  };

  return (
    <li className={style.Container}>
      {/* <button type="button" id={id} onClick={handleClick}>
        <i className="fa-solid fa-circle-chevron-right" id={id} />
      </button> */}
      <Link to={{ pathname: `/country/${id}`, state: {} }}>
        <button type="button" id={id} onClick={handleClick}>
          <i className="fa-solid fa-circle-chevron-right" id={id} />
        </button>
      </Link>
      <div>
        <div>
          <p>{abbreviation}</p>
          <span>{id}</span>
        </div>
        <p>
          Life expectancy:
          {' '}
          {life_expectancy}
        </p>
      </div>
    </li>
  );
};

export default Case;
