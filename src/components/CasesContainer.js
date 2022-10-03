import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { searchImplementation } from '../redux/covidcases';
import Case from './Case';
import SearchBar from './Search';

import style from './css/CasesContainer.module.css';

const CasesContainer = (props) => {
  const countryCases = props;
  const { cases } = countryCases;
  let filteredCases = [];

  // const dispatch = useDispatch();

  const [v, setValue] = useState({
    value: '',
  });

  const handleChange = (e) => {
    setValue({
      value: e.target.value,
    });
    const str = e.target.value;
    const searchStr = str.charAt(0).toUpperCase();
    filteredCases = searchImplementation(cases, searchStr + str.slice(1));
    // console.log(filteredCases);
  };

  return (
    <section className={style.Section}>
      <SearchBar handleChange={handleChange} value={v.value} />
      <ul className={style.Container}>
        {
          filteredCases.length > 0 ? filteredCases.map((c) => {
            const { id } = c;
            return <Case key={`key-${id}`} country={c} />;
          }) : cases.map((c) => {
            const { id } = c;
            return <Case key={`key-${id}`} country={c} />;
          })
        }
      </ul>
    </section>
  );
};

export default CasesContainer;
