import { useState } from "react";
import Case from "./Case";
import SearchBar from "./Search";


const CasesContainer = (props) => {
  const countryCases = props;
  const { cases } = countryCases;

  const [v, setValue] = useState({
    value: '',
  });

  const handleChange = (e) => {
    setValue({
      value: e.target.value,
    });
  };

  return (
    <>
      <SearchBar handleChange={handleChange} value={v.value} />
      <ul>
      {
        cases.map((c) => {
          const { id } = c;
          return <Case key={`key-${id}`} id={id}/>
        })
      }
    </ul>
    </>
  )
};


export default CasesContainer;
