import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [queryResult, setQueryResult] = useState([]);

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

  const dataToUse = query ? queryResult : data;
  return (
    <>
      <Header
        queryResult={queryResult}
        setQueryResult={setQueryResult}
        setQuery={setQuery}
        data={data}
        setData={setData}
        query={query}
      />
      <Content dataToUse={dataToUse} isLoading={isLoading} />
    </>
  );
}

export default App;
