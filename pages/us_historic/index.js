import { useState, useEffect } from "react";
import styled from "styled-components";
import Card, { CenterDiv } from "../../components/card";

export const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const us_historic = () => {
  const [usData, setUsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [longLoad, setLongLoad] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.covidactnow.org/v2/states.timeseries.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f"
    )
      .then((res) => res.json())
      .then((usData) => {
        setUsData(usData);
        setLongLoad(true);
      });
    setTimeout(() => setIsLoaded(true), 1000);
    
  }, []);
  if (!isLoaded || !longLoad) return <h1 className="typewriter">Loading...</h1>;

  return (
    <div>
      <CenterDiv>
        <h2>Click State to See Details</h2>
      </CenterDiv>
      <Main>
        {isLoaded &&
          longLoad &&
          usData.map((data) => (
            <Card
              hover="pointer"
              isCompactData
              route="us_historic"
              key={data.fips}
              state={data.state}
              stateId={data.state}
              width={10}
            />
          ))}
      </Main>
    </div>
  );
};

export default us_historic;
