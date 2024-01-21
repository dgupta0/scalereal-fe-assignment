import searchIcon from "../assets/search.png";
import PropTypes from "prop-types";

export const Search = ({ setqueryData, setquery, query, data }) => {
  const handleSearch = (e) => {
    setqueryData(data);
    let val = e.target.value;
    setquery(val);
    console.log(query);
    const filteredData = data.filter((el) =>
      el.title.toLowerCase().includes(val.toLowerCase())
    );
    setqueryData(filteredData);
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
  setqueryData: PropTypes.func.isRequired,
  setquery: PropTypes.func.isRequired,
  query: PropTypes.string,
  data: PropTypes.array.isRequired,
};
