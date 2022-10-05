import style from './css/Search.module.css';

const SearchBar = (props) => {
  const p = props;
  const { handleChange, value } = p;

  return (
    <div className={style.SearchContainer}>
      <input
        className={style.InputField}
        value={value}
        name="search"
        id="searchbar"
        onChange={handleChange}
        placeholder="Filter/search by country"
      />
    </div>
  );
};

export default SearchBar;
