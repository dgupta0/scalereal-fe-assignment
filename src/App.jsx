import { useState } from "react";
import "./styles.css";
import searchIcon from "../src/assets/search.png";
function App() {
  const [openSort, setOpenSort] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  console.log(searchVal);
  return (
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
              <button className="close-btn" onClick={() => setOpenSort(false)}>
                x
              </button>
            </div>
            <div className="sort-options">
              <button>Episodes</button>
              <button>Year</button>
            </div>
          </div>
        )}
      </div>
      <div className="search-div">
        <img src={searchIcon} alt="search icon" />
        <input
          type="search"
          name="search"
          onChange={(e) => setSearchVal(e.target.value)}
        />
      </div>
    </header>
  );
}

export default App;
