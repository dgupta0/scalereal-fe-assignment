import PropTypes from "prop-types";

export const SelectedMovie = ({ selectedMovie }) => {
  const renderSelectedMovie = selectedMovie && (
    <div key={selectedMovie.episode_id} className="episode-desc">
      <h3>{selectedMovie.title}</h3>
      <p className="details-body">{selectedMovie.opening_crawl}</p>
      <p>Directed By: {selectedMovie.director}</p>
    </div>
  );
  return (
    <section
      className={
        selectedMovie ? "description-container" : "description-container-empty"
      }
    >
      {selectedMovie ? renderSelectedMovie : "No Movie Selected"}
    </section>
  );
};
SelectedMovie.propTypes = {
  selectedMovie: PropTypes.object,
};
