const SearchBar = (props) => {

  const p = props;
  const { handleChange, value } = p;

  return (
    <>
      <input value={value} name="search" id="searchbar" onChange={handleChange} />
    </>
  )
};

export default SearchBar;
