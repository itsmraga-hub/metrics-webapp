import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchsingleCountryInfo } from '../redux/covidcases';

import CountryComponent from '../components/CountryComponent';

const SingleCase = () => {
  const params = useParams();

  const { id } = params;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchsingleCountryInfo(id));
  }, []);

  return (
    <>
      <main>
        <div>
          <CountryComponent />
        </div>
      </main>
    </>
  );
};

export default SingleCase;
