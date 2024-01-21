import PropTypes from "prop-types";
import { Search } from "./Search";
import { Sort } from "./Sort";

export const Header = ({
  setqueryData,
  setquery,
  query,
  data,
  queryData,
  setData,
}) => {
  return (
    <header>
      <Sort data={data} setData={setData} />
      <Search
        queryData={queryData}
        setqueryData={setqueryData}
        setquery={setquery}
        query={query}
        data={data}
        setData={setData}
      />
    </header>
  );
};

Header.propTypes = {
  setqueryData: PropTypes.func.isRequired,
  setquery: PropTypes.func.isRequired,
  query: PropTypes.string,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  queryData: PropTypes.array.isRequired,
};
