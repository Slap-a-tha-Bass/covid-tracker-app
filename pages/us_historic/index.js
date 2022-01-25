import { useState, useEffect } from "react";

const us_historic  = () => {
    const [usData, setUsData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch(
          "https://api.covidactnow.org/v2/states.timeseries.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f"
        )
          .then((res) => res.json())
          .then((usData) => setUsData(usData));
        setTimeout(() => setIsLoaded(true), 1500);
      }, []);
  if (!isLoaded) return <h1 className="typewriter">Loading...</h1>;

  return <div>
      {usData.map(data => (
          <h1>{data.population}</h1>
      ))}
  </div>;
};

export default us_historic;
