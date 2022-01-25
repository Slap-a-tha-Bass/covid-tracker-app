import { useState, useEffect } from "react";
import styled from "styled-components";
import Card from "../components/card";

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const us_data = () => {
  const [usData, setUsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(
      "https://api.covidactnow.org/v2/states.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f"
    )
      .then((res) => res.json())
      .then((usData) => setUsData(usData));
    setTimeout(() => setIsLoaded(true), 1500);
  }, []);
  if (!isLoaded) return <h1 className="typewriter">Loading...</h1>;
  return (
    <Main>
      {isLoaded &&
        usData.map((data) => (
          <Card
            key={data.fips}
            state={data.state}
            population={
              data.population ? data.population.toLocaleString() : null
            }
            metrics_testPositivityRatio={
              data.metrics.testPositivityRatio
                ? (data.metrics.testPositivityRatio * 100).toFixed(2)
                : null
            }
            metrics_vaccinationsInitiatedRatio={
              data.metrics.vaccinationsInitiatedRatio
                ? (data.metrics.vaccinationsInitiatedRatio * 100).toFixed(2)
                : null
            }
            metrics_vaccinationsCompletedRatio={
              data.metrics.vaccinationsCompletedRatio
                ? (data.metrics.vaccinationsCompletedRatio * 100).toFixed(2)
                : null
            }
            metrics_vaccinationsAdditionalDoseRatio={
              data.metrics.vaccinationsAdditionalDoseRatio
                ? (data.metrics.vaccinationsAdditionalDoseRatio * 100).toFixed(
                    2
                  )
                : null
            }
            actuals_cases={
              data.actuals.cases ? data.actuals.cases.toLocaleString() : null
            }
            actuals_deaths={
              data.actuals.deaths ? data.actuals.deaths.toLocaleString() : null
            }
            actuals_hospitalBeds_capacity={
              data.actuals.hospitalBeds.capacity
                ? data.actuals.hospitalBeds.capacity.toLocaleString()
                : null
            }
            actuals_hospitalBeds_currentUsageTotal={
              data.actuals.hospitalBeds.currentUsageTotal
                ? data.actuals.hospitalBeds.currentUsageTotal.toLocaleString()
                : null
            }
            actuals_hospitalBeds_currentUsageCovid={
              data.actuals.hospitalBeds.currentUsageCovid
                ? data.actuals.hospitalBeds.currentUsageCovid.toLocaleString()
                : null
            }
            actuals_icuBeds_capacity={
              data.actuals.icuBeds.capacity
                ? data.actuals.icuBeds.capacity.toLocaleString()
                : null
            }
            actuals_icuBeds_currentUsageTotal={
              data.actuals.icuBeds.currentUsageTotal
                ? data.actuals.icuBeds.currentUsageTotal.toLocaleString()
                : null
            }
            actuals_icuBeds_currentUsageCovid={
              data.actuals.icuBeds_currentUsageCovid
                ? data.actuals.icuBeds_currentUsageCovid.toLocaleString()
                : null
            }
            actuals_positiveTests={
              data.actuals.positiveTests
                ? data.actuals.positiveTests.toLocaleString()
                : null
            }
            actuals_negativeTests={
              data.actuals.negativeTests
                ? data.actuals.negativeTests.toLocaleString()
                : null
            }
            actuals_newCases={
              data.actuals.newCases
                ? data.actuals.newCases.toLocaleString()
                : null
            }
            actuals_newDeaths={
              data.actuals.newDeaths
                ? data.actuals.newDeaths.toLocaleString()
                : null
            }
            actuals_vaccinesDistributed={
              data.actuals.vaccinesDistributed
                ? data.actuals.vaccinesDistributed.toLocaleString()
                : null
            }
            actuals_vaccinationsInitiated={
              data.actuals.vaccinationsInitiated
                ? data.actuals.vaccinationsInitiated.toLocaleString()
                : null
            }
            actuals_vaccinationsCompleted={
              data.actuals.vaccinationsCompleted
                ? data.actuals.vaccinationsCompleted.toLocaleString()
                : null
            }
            actuals_vaccinationsAdditionalDose={
              data.actuals.vaccinationsAdditionalDose
                ? data.actuals.vaccinationsAdditionalDose.toLocaleString()
                : null
            }
          />
        ))}
    </Main>
  );
};

export default us_data;
