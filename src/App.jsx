import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import searchIcon from "../src/assets/search.png";
import { integerToRoman } from "./utils";
function App() {
  const [openSort, setOpenSort] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [showDetails, setShowDetails] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await axios.get("https://swapi.dev/api/films/?format=json");
        setData(res.data.results);
      } catch (error) {
        console.log(error, "error from api");
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  const showDescription = (id) => {
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
  const handleBySearch = (e) => {
    setSearchData(data);
    let val = e.target.value;
    setSearchVal(val);
    console.log(searchVal);
    const filteredData = data.filter((el) =>
      el.title.toLowerCase().includes(val.toLowerCase())
    );
    setSearchData(filteredData);
  };
  const handleSortByEpisodes = () => {
    setData((prevData) => prevData.sort((a, b) => a.episode_id - b.episode_id));
    setOpenSort(false);
  };
  const handleSortByDate = () => {
    setData((prevData) =>
      prevData.sort(
        (a, b) => new Date(a.release_date) - new Date(b.release_date)
      )
    );
    setOpenSort(false);
  };
  console.log("data", data);
  const dataToUse = searchVal ? searchData : data;
  const dataToRender = dataToUse.map((el) => (
    <div
      key={el.episode_id}
      onClick={() => showDescription(el.episode_id)}
      className={`episodes episode-${el.episode_id}`}
    >
      <p>EPISODE-{el.episode_id}</p>
      <p>
        EPISODE {integerToRoman(el.episode_id)}- {el.title}
      </p>
      <p>{el.release_date}</p>
    </div>
  ));

  return (
    <>
      <header>
        <div className="sort-div">
          <button
            onClick={() => setOpenSort(true)}
            className={openSort ? "sort-btn active" : "sort-btn"}
          >
            Sort By..
          </button>
          {openSort && (
            <div className="sort-option-card">
              <div className="close-sort-container">
                <p>Sort by</p>
                <button
                  className="close-btn"
                  onClick={() => setOpenSort(false)}
                >
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
        <div className="search-div">
          <img src={searchIcon} alt="search icon" />
          <input
            type="search"
            name="search"
            onChange={(e) => handleBySearch(e)}
          />
        </div>
      </header>
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
}

export default App;
