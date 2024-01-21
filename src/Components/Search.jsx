import searchIcon from "../assets/search.png";
import PropTypes from "prop-types";

export const Search = ({ setQueryResult, setQuery, query, data }) => {
  const handleSearch = (e) => {
    setQueryResult(data);
    let val = e.target.value;
    setQuery(val);
    console.log(query);
    const filteredData = data.filter((el) =>
      el.title.toLowerCase().includes(val.toLowerCase())
    );
    setQueryResult(filteredData);
  };
  return (
    <div className="search-div">
      <img src={searchIcon} alt="search icon" />
      <input
        type="search"
        name="search"
        value={query}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

Search.propTypes = {
  setQueryResult: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
  data: PropTypes.array.isRequired,
};
