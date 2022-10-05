import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchsingleCountryInfo } from '../redux/covidcases';
import style from './css/Case.module.css';

const Case = (props) => {
  const coun = props;
  const { country, i } = coun;

  // eslint-disable-next-line camelcase
  const { abbreviation, id, life_expectancy } = country;

  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(fetchsingleCountryInfo(e.target.id));
  };

  return (
    <li className={`${style.Container} ${i % 4 === 0 || (i - 1) % 4 === 0 ? style.even : style.odd}`}>
      <Link to={{ pathname: `/country/${id}`, state: {} }}>
        <button type="button" id={id} onClick={handleClick}>
          <i className="fa-solid fa-circle-chevron-right fa-2x" id={id} />
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
          {/* eslint-disable-next-line camelcase */}
          {life_expectancy}
        </p>
      </div>
    </li>
  );
};

export default Case;
