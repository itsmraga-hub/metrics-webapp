import { useSelector } from 'react-redux';

import { useState } from 'react';
import { searchImplementation } from '../redux/covidcases';

import CasesContainer from './CasesContainer';
import Header from './Header';
import Menu from './Menu';

const Home = () => {
  const cases = useSelector((state) => state.cases);

  const [state, setState] = useState({
    value: '',
    filteredCases: [],
  });

  const handleChange = (e) => {
    const str = e.target.value;
    const searchStr = str.charAt(0).toUpperCase() + str.slice(1);
    setState({
      value: e.target.value,
      filteredCases: [...searchImplementation(cases, searchStr)],
    });
  };

  return (
    <>
      <Header />
      <Menu />
      {
        state.filteredCases.length > 0 ? (
          <CasesContainer
            cases={state.filteredCases}
            value={state.value}
            handleChange={handleChange}
          />
        ) : (
          <CasesContainer
            cases={cases}
            value={state.value}
            handleChange={handleChange}
          />
        )
      }
    </>
  );
};

export default Home;
