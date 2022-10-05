import Case from './Case';
import SearchBar from './Search';

import style from './css/CasesContainer.module.css';

const CasesContainer = (props) => {
  const countryCases = props;
  const { cases, handleChange, value } = countryCases;

  return (
    <section className={style.Section}>
      <SearchBar handleChange={handleChange} value={value} />
      <ul className={style.Container}>
        {
          cases.map((c, i) => {
            const { id } = c;
            return <Case key={`key-${id}`} country={c} id={id} i={i + 1} />;
          })
        }
      </ul>
    </section>
  );
};

export default CasesContainer;
