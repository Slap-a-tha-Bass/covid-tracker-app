import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../../components/card";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StateId = () => {
  const router = useRouter();
  const { stateid } = router.query;

  const [usData, setUsData] = useState([]);

  const [stateData, setStateData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.covidactnow.org/v2/states.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f"
    )
      .then((res) => res.json())
      .then((usData) => setUsData(usData));
  }, []);
  useEffect(() => {
    if (stateid) {
      fetch(`https://api.covidactnow.org/v2/state/${stateid}.timeseries.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f
      `)
        .then((res) => res.json())
        .then((data) => {
          setStateData(data);
          console.log({ data });
          setTimeout(() => setIsLoaded(true), 1000);
        });
    }
  }, [stateid]);

  if (!isLoaded) return <h1 className="typewriter">Loading...</h1>;
  let casesArray;
  if (isLoaded) {
    if (stateData) {
      casesArray = stateData.actualsTimeseries.map((cases) => cases.cases);
    }
  }
  return (
    <Main>
      {isLoaded && (
        <Card
          width={90}
          key={stateData.fips}
          route="us_historic"
          state={stateData.state}
          stateId={stateData.state}
          showLineGraph
        />
      )}
    </Main>
  );
};

export default StateId;
