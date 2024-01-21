import searchIcon from "../assets/search.png";
import PropTypes from "prop-types";

export const Search = ({ setSearchData, setSearchVal, searchVal, data }) => {
  const handleSearch = (e) => {
    setSearchData(data);
    let val = e.target.value;
    setSearchVal(val);
    console.log(searchVal);
    const filteredData = data.filter((el) =>
      el.title.toLowerCase().includes(val.toLowerCase())
    );
    setSearchData(filteredData);
  };
  return (
    <div className="search-div">
      <img src={searchIcon} alt="search icon" />
      <input
        type="search"
        name="search"
        value={searchVal}
        onChange={(e) => handleSearch(e)}
      />
    </div>
  );
};

Search.propTypes = {
  setSearchData: PropTypes.func.isRequired,
  setSearchVal: PropTypes.func.isRequired,
  searchVal: PropTypes.string,
  data: PropTypes.array.isRequired,
};
