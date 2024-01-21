import { useState } from "react";
import PropTypes from "prop-types";

export const Sort = ({ data, setData }) => {
  const [openSort, setOpenSort] = useState(false);
  const handleSortByEpisodes = () => {
    const newData = [...data.sort((a, b) => a.episode_id - b.episode_id)];
    setData(newData);
    setOpenSort(false);
  };

  const handleSortByDate = () => {
    const newData = [
      ...data.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      ),
    ];
    setData(newData);
    setOpenSort(false);
  };
  return (
    <div className="sort-div">
      <button
        onClick={() => setOpenSort(true)}
        className={openSort ? "sort-btn active" : "sort-btn"}
      >
        Sort By...
      </button>
      {openSort && (
        <div className="sort-option-card">
          <div className="close-sort-container">
            <p>Sort by</p>
            <button className="close-btn" onClick={() => setOpenSort(false)}>
              x
            </button>
          </div>
          <div className="sort-options">
            <button onClick={handleSortByEpisodes}>Episodes</button>
            <button onClick={handleSortByDate}>Year</button>
          </div>
        </div>
      )}
    </div>
  );
};

Sort.propTypes = {
  data: PropTypes.array.isRequired,
  setData: PropTypes.func.isRequired,
};
