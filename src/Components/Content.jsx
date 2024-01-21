import { useState } from "react";
import PropTypes from "prop-types";
import { Collection } from "./Collection";
import { SelectedMovie } from "./SelectedMovie";

export const Content = ({ dataToUse, isLoading }) => {
  const [selectedMovie, setselectedMovie] = useState(null);
  return (
    <>
      {isLoading ? (
        <main>
          <div className="loader"></div>
        </main>
      ) : (
        <main>
          <Collection
            dataToUse={dataToUse}
            setselectedMovie={setselectedMovie}
          />
          <SelectedMovie selectedMovie={selectedMovie} />
        </main>
      )}
    </>
  );
};
Content.propTypes = {
  dataToUse: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
