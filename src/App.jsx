import { useState, useEffect } from "react";
import axios from "axios";

import { Header } from "./Components/Header";
import { Content } from "./Components/Content";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [query, setquery] = useState("");
  const [queryData, setqueryData] = useState([]);

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

  const dataToUse = query ? queryData : data;
  return (
    <>
      <Header
        queryData={queryData}
        setqueryData={setqueryData}
        setquery={setquery}
        data={data}
        setData={setData}
        query={query}
      />
      <Content dataToUse={dataToUse} isLoading={isLoading} />
    </>
  );
}

export default App;
