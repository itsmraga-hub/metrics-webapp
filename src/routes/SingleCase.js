import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Country from '../components/Country';
import { fetchsingleCountryInfo } from '../redux/covidcases';

const SingleCase = () => {
  const params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchsingleCountryInfo(params.id));
  });

  return (
    <>
      <main>
        <h1>Hello there</h1>
        <Country />
      </main>
    </>
  );
};

export default SingleCase;
