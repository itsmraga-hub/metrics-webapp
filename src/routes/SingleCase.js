import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getState } from '../redux/covidcases';

const SingleCase = () => {
  const { filterCountry } = useSelector((state) => state.cases);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getState());
  });

  console.log(filterCountry);
  // const { All } = filterCountry || {};
  // const {
  // abbreviation,
  // capital_city,
  // confirmed,
  // continent,
  // country,
  // deaths,
  // elevation_in_meters,
  // iso,
  // lat,
  // life_expectancy,
  // location,
  // long,
  // population,
  // recovered,
  // sq_km_area,
  // updated,
  // } = All;

  return (
    <>
      <main>
        <div>
          <h1>{}</h1>
        </div>
      </main>
    </>
  );
};

export default SingleCase;
