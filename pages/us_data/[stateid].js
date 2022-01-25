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

  const [stateData, setStateData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (stateid) {
      fetch(
        `https://api.covidactnow.org/v2/state/${stateid}.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f`
      )
        .then((res) => res.json())
        .then((data) => {
          setStateData(data);
          setIsLoaded(true);
        });
    }
  }, [stateid]);

  if (!isLoaded) return <h1>Loading...</h1>;
  return (
    <Main>
      {isLoaded && (
        <Card
          width={50}
          key={stateData.fips}
          state={stateData.state}
          stateId={stateData.state}
          population={
            stateData.population ? stateData.population.toLocaleString() : null
          }
          metrics_testPositivityRatio={
            stateData.metrics.testPositivityRatio
              ? (stateData.metrics.testPositivityRatio * 100).toFixed(2)
              : null
          }
          metrics_vaccinationsInitiatedRatio={
            stateData.metrics.vaccinationsInitiatedRatio
              ? (stateData.metrics.vaccinationsInitiatedRatio * 100).toFixed(2)
              : null
          }
          metrics_vaccinationsCompletedRatio={
            stateData.metrics.vaccinationsCompletedRatio
              ? (stateData.metrics.vaccinationsCompletedRatio * 100).toFixed(2)
              : null
          }
          metrics_vaccinationsAdditionalDoseRatio={
            stateData.metrics.vaccinationsAdditionalDoseRatio
              ? (
                  stateData.metrics.vaccinationsAdditionalDoseRatio * 100
                ).toFixed(2)
              : null
          }
          actuals_cases={
            stateData.actuals.cases
              ? stateData.actuals.cases.toLocaleString()
              : null
          }
          actuals_deaths={
            stateData.actuals.deaths
              ? stateData.actuals.deaths.toLocaleString()
              : null
          }
          actuals_hospitalBeds_capacity={
            stateData.actuals.hospitalBeds.capacity
              ? stateData.actuals.hospitalBeds.capacity.toLocaleString()
              : null
          }
          actuals_hospitalBeds_currentUsageTotal={
            stateData.actuals.hospitalBeds.currentUsageTotal
              ? stateData.actuals.hospitalBeds.currentUsageTotal.toLocaleString()
              : null
          }
          actuals_hospitalBeds_currentUsageCovid={
            stateData.actuals.hospitalBeds.currentUsageCovid
              ? stateData.actuals.hospitalBeds.currentUsageCovid.toLocaleString()
              : null
          }
          actuals_icuBeds_capacity={
            stateData.actuals.icuBeds.capacity
              ? stateData.actuals.icuBeds.capacity.toLocaleString()
              : null
          }
          actuals_icuBeds_currentUsageTotal={
            stateData.actuals.icuBeds.currentUsageTotal
              ? stateData.actuals.icuBeds.currentUsageTotal.toLocaleString()
              : null
          }
          actuals_icuBeds_currentUsageCovid={
            stateData.actuals.icuBeds_currentUsageCovid
              ? stateData.actuals.icuBeds_currentUsageCovid.toLocaleString()
              : null
          }
          actuals_positiveTests={
            stateData.actuals.positiveTests
              ? stateData.actuals.positiveTests.toLocaleString()
              : null
          }
          actuals_negativeTests={
            stateData.actuals.negativeTests
              ? stateData.actuals.negativeTests.toLocaleString()
              : null
          }
          actuals_newCases={
            stateData.actuals.newCases
              ? stateData.actuals.newCases.toLocaleString()
              : null
          }
          actuals_newDeaths={
            stateData.actuals.newDeaths
              ? stateData.actuals.newDeaths.toLocaleString()
              : null
          }
          actuals_vaccinesDistributed={
            stateData.actuals.vaccinesDistributed
              ? stateData.actuals.vaccinesDistributed.toLocaleString()
              : null
          }
          actuals_vaccinationsInitiated={
            stateData.actuals.vaccinationsInitiated
              ? stateData.actuals.vaccinationsInitiated.toLocaleString()
              : null
          }
          actuals_vaccinationsCompleted={
            stateData.actuals.vaccinationsCompleted
              ? stateData.actuals.vaccinationsCompleted.toLocaleString()
              : null
          }
          actuals_vaccinationsAdditionalDose={
            stateData.actuals.vaccinationsAdditionalDose
              ? stateData.actuals.vaccinationsAdditionalDose.toLocaleString()
              : null
          }
        />
      )}
    </Main>
  );
};

export default StateId;
