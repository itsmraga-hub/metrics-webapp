import { useSelector } from 'react-redux';
import Country from '../components/Country';

const SingleCase = () => {
  const { filterCountry } = useSelector((state) => state.cases);

  return (
    <>
      <main>
        <h1>Hello there</h1>
        <Country country={filterCountry} />
      </main>
    </>
  );
};

export default SingleCase;
