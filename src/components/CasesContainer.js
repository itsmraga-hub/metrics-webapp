import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByCountry } from "../redux/covidcases";
import Case from "./Case";
import SearchBar from "./Search";

import style from './css/CasesContainer.module.css';


const CasesContainer = (props) => {
  const countryCases = props;
  const { cases } = countryCases;
  console.log(cases[0]);

  const dispatch = useDispatch();

  const [v, setValue] = useState({
    value: '',
  });

  const handleChange = (e) => {
    setValue({
      value: e.target.value,
    });
    const str = e.target.value;
    const searchStr = str.charAt(0).toUpperCase();
    dispatch(searchByCountry(searchStr));
  };

  return (
    <section className={style.Section}>
      <SearchBar handleChange={handleChange} value={v.value} />
      <ul className={style.Container}>
      {
        cases.map((c) => {
          const { id } = c;
          return <Case key={`key-${id}`} country={c}/>
        })
      }
    </ul>
    </section>
  )
};


export default CasesContainer;
