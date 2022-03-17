import React, { useEffect, useState } from "react";
import Laptop from "./components/Laptop";
import LoadingMask from "./components/LoadingMask";

const title = "Laptops";

const url = "https://demoapi.com/api/laptop";

const App = () => {
  const [laptops, setLaptops] = useState([]);
  const [loading, setLoading] = useState(true);

  // const sortHandler = () => {
  //   laptops.sort((a, b) => a.weigth - b.weigth);
  // };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((laps) => {
        setLaptops(laps);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>{title}</h1>
      <button>SORT</button>
      <input placeholder="search here" />
      {loading ? (
        <LoadingMask />
      ) : (
        laptops.map((laps) => <Laptop key={laps.name} {...laps} />)
      )}
    </div>
  );
};

export default App;
