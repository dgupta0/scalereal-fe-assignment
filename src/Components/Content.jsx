import { integerToRoman } from "../utils";
import { useState } from "react";
import PropTypes from "prop-types";

export const Content = ({ dataToUse, isLoading, data }) => {
  const [showDetails, setShowDetails] = useState([]);
  const dataToRender = dataToUse.map((el) => (
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
  const handleShowDescription = (id) => {
    const episode = data.find((el) => el.episode_id === id);
    console.log(episode);
    setShowDetails([
      <div key={episode.episode_id} className="episode-desc">
        <h3>{episode.title}</h3>
        <p className="details-body">{episode.opening_crawl}</p>
        <p>Directed By: {episode.director}</p>
      </div>,
    ]);
  };
  return (
    <>
      {isLoading ? (
        <main>
          <div className="loader"></div>
        </main>
      ) : (
        <main>
          <section className="data-list-container">{dataToRender}</section>
          <section
            className={
              showDetails.length
                ? "description-container"
                : "description-container-empty"
            }
          >
            {showDetails.length ? showDetails : "No Movie Selected"}
          </section>
        </main>
      )}
    </>
  );
};
Content.propTypes = {
  dataToUse: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
};
