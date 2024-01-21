import PropTypes from "prop-types";
import { Search } from "./Search";
import { Sort } from "./Sort";

export const Header = ({
  setSearchData,
  setSearchVal,
  searchVal,
  data,
  searchData,
  setData,
}) => {
  return (
    <header>
      <Sort data={data} setData={setData} />
      <Search
        searchData={searchData}
        setSearchData={setSearchData}
        setSearchVal={setSearchVal}
        searchVal={searchVal}
        data={data}
        setData={setData}
      />
    </header>
  );
};

Header.propTypes = {
  setSearchData: PropTypes.func.isRequired,
  setSearchVal: PropTypes.func.isRequired,
  searchVal: PropTypes.string,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  searchData: PropTypes.array.isRequired,
};
