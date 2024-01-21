import PropTypes from "prop-types";
import { Search } from "./Search";
import { Sort } from "./Sort";

export const Header = ({
  setQueryResult,
  setQuery,
  query,
  data,
  queryResult,
  setData,
}) => {
  return (
    <header>
      <Sort data={data} setData={setData} />
      <Search
        queryResult={queryResult}
        setQueryResult={setQueryResult}
        setQuery={setQuery}
        query={query}
        data={data}
        setData={setData}
      />
    </header>
  );
};

Header.propTypes = {
  setQueryResult: PropTypes.func.isRequired,
  setQuery: PropTypes.func.isRequired,
  query: PropTypes.string,
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
  queryResult: PropTypes.array.isRequired,
};
