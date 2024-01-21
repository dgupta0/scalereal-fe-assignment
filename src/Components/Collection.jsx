import { integerToRoman } from "../utils";
import PropTypes from "prop-types";

export const Collection = ({ dataToUse, setselectedMovie }) => {
  const handleShowDescription = (id) => {
    const episode = dataToUse.find((el) => el.episode_id === id);
    setselectedMovie(episode);
  };

  const renderData = dataToUse.map((el) => (
    <div
      key={el.episode_id}
      onClick={() => handleShowDescription(el.episode_id)}
      className={`episodes episode-${el.episode_id}`}
    >
      <p>EPISODE- {el.episode_id}</p>
      <p>
        EPISODE {integerToRoman(el.episode_id)}- {el.title}
      </p>
      <p>{el.release_date}</p>
    </div>
  ));
  return <section className="data-list-container">{renderData}</section>;
};

Collection.propTypes = {
  dataToUse: PropTypes.array.isRequired,
  setselectedMovie: PropTypes.func.isRequired,
};
