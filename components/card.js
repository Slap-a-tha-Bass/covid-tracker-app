import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { GoArrowLeft } from "react-icons/go";
import BarChartCases from "./charts/barchart_cases";
import BarChartDeaths from "./charts/barchart_deaths";
import BarChartAvg from "./charts/barchart_avg";
import LineGraphCases from "./charts/linegraph_cases";
import LineGraphDeaths from "./charts/linegraph_deaths";

const CardContainer = styled.div`
  width: ${(props) => props.width || 25}%;
  border: 1px solid white;
  left: ${(props) => props.left || 0}%;
  padding: 1rem;
  &:hover {
    cursor: ${(props) => props.hover || ""};
  }
`;
const Flexbox = styled.div`
  display: flex;
  place-content: space-around;
`;
const FlexBetween = styled.div`
  display: flex;
  place-content: space-between;
`;
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${(props) => props.color || "red"};
  width: 90%;
  margin-left: 5%;
`;

const Card = ({
  stateId,
  isCompactData,
  route,
  state,
  population,
  averageCases,
  metrics_testPositivityRatio,
  metrics_vaccinationsInitiatedRatio,
  metrics_vaccinationsCompletedRatio,
  metrics_vaccinationsAdditionalDoseRatio,
  actuals_cases,
  actuals_deaths,
  actuals_positiveTests,
  actuals_negativeTests,
  actuals_contactTracers,
  actuals_hospitalBeds_capacity,
  actuals_hospitalBeds_currentUsageTotal,
  actuals_hospitalBeds_currentUsageCovid,
  actuals_icuBeds_capacity,
  actuals_icuBeds_currentUsageTotal,
  actuals_icuBeds_currentUsageCovid,
  actuals_newCases,
  actuals_newDeaths,
  actuals_vaccinesDistributed,
  actuals_vaccinationsInitiated,
  actuals_vaccinationsCompleted,
  actuals_vaccinationsAdditionalDose,
  actualsTimeseries_cases,
  width,
  left,
  hover,
  color,
  showBarChart,
  showLineGraph,
  isCurrentData,
}) => {
  return (
    <Link href={`/${route}/${stateId}`}>
      {isCompactData ? (
        <CardContainer hover={hover} width={width}>
          <h3>{state}</h3>
          {population ? <p>Population: {population}</p> : <></>}
          {metrics_testPositivityRatio ? (
            <p>Tested positive: {metrics_testPositivityRatio}%</p>
          ) : (
            <></>
          )}
          {metrics_vaccinationsInitiatedRatio ? (
            <p>First dose: {metrics_vaccinationsInitiatedRatio}%</p>
          ) : (
            <></>
          )}
          {metrics_vaccinationsCompletedRatio ? (
            <p>Second dose: {metrics_vaccinationsCompletedRatio}%</p>
          ) : (
            <></>
          )}
          {metrics_vaccinationsAdditionalDoseRatio ? (
            <p>Booster shot: {metrics_vaccinationsAdditionalDoseRatio}%</p>
          ) : (
            <></>
          )}
        </CardContainer>
      ) : (
        <CardContainer width={width} left={left}>
          <CenterDiv>
            <h1>{state}</h1>
          </CenterDiv>
          {showBarChart && (
            <BarChartCases State_Cases={actuals_cases.split(",").join("")} />
          )}
          <CenterDiv />
          {showBarChart && (
            <BarChartDeaths State_Deaths={actuals_deaths.split(",").join("")} />
          )}
          <CenterDiv />
          {showBarChart && (
            <BarChartAvg
              Deaths_Per_Case={
                (actuals_deaths.split(",").join("") /
                  actuals_cases.split(",").join("")) *
                100
              }
            />
          )}
          {showLineGraph && <LineGraphCases />}
          {showLineGraph && (
            <FlexBetween>
              <h5>March 2020</h5>
              <h5>Present</h5>
            </FlexBetween>
          )}
          {showLineGraph && <LineGraphDeaths />}
          {showLineGraph && (
            <FlexBetween>
              <h5>March 2020</h5>
              <h5>Present</h5>
            </FlexBetween>
          )}
          <CenterDiv />
          {isCurrentData && (
            <Flexbox>
              <div>
                <h4>People</h4>
                <p>Population: {population}</p>
                {metrics_testPositivityRatio ? (
                  <p>Tested positive: {metrics_testPositivityRatio}%</p>
                ) : (
                  <></>
                )}
                {metrics_vaccinationsInitiatedRatio ? (
                  <p>First dose: {metrics_vaccinationsInitiatedRatio}%</p>
                ) : (
                  <></>
                )}
                {metrics_vaccinationsCompletedRatio ? (
                  <p>Second dose: {metrics_vaccinationsCompletedRatio}%</p>
                ) : (
                  <></>
                )}
                {metrics_vaccinationsAdditionalDoseRatio ? (
                  <p>
                    Booster shot: {metrics_vaccinationsAdditionalDoseRatio}%
                  </p>
                ) : (
                  <></>
                )}
                {actuals_positiveTests ? (
                  <p>Tested positive: {actuals_positiveTests}</p>
                ) : (
                  <></>
                )}
                {actuals_negativeTests ? (
                  <p>Tested negative: {actuals_negativeTests}</p>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <h4>Vaccines</h4>
                {actuals_vaccinesDistributed ? (
                  <p>Total distribution: {actuals_vaccinesDistributed}</p>
                ) : (
                  <></>
                )}
                {actuals_vaccinationsInitiated ? (
                  <p>First dose: {actuals_vaccinationsInitiated}</p>
                ) : (
                  <></>
                )}
                {actuals_vaccinationsCompleted ? (
                  <p>Second dose: {actuals_vaccinationsCompleted}</p>
                ) : (
                  <></>
                )}
                {actuals_vaccinationsAdditionalDose ? (
                  <p>Booster shot: {actuals_vaccinationsAdditionalDose}</p>
                ) : (
                  <></>
                )}
              </div>
            </Flexbox>
          )}
          <CenterDiv />
          {isCurrentData && (
            <Flexbox>
              <div>
                <h4>Cases</h4>
                {actuals_cases ? <p>Total cases: {actuals_cases}</p> : <></>}
                {actuals_deaths ? <p>Total deaths: {actuals_deaths}</p> : <></>}
                {actuals_newCases ? (
                  <p>New cases: {actuals_newCases}</p>
                ) : (
                  <></>
                )}
                {actuals_newDeaths ? (
                  <p>New deaths: {actuals_newDeaths}</p>
                ) : (
                  <></>
                )}
              </div>
              <div>
                <h4>Capacity</h4>
                {actuals_hospitalBeds_capacity ? (
                  <p>Bed capacity: {actuals_hospitalBeds_capacity}</p>
                ) : (
                  <></>
                )}
                {actuals_hospitalBeds_currentUsageTotal ? (
                  <p>Beds used: {actuals_hospitalBeds_currentUsageTotal}</p>
                ) : (
                  <></>
                )}
                {actuals_hospitalBeds_currentUsageCovid ? (
                  <p>
                    Beds used for COVID:{" "}
                    {actuals_hospitalBeds_currentUsageCovid}
                  </p>
                ) : (
                  <></>
                )}
                {actuals_icuBeds_capacity ? (
                  <p>ICU capacity: {actuals_icuBeds_capacity}</p>
                ) : (
                  <></>
                )}
                {actuals_icuBeds_currentUsageTotal ? (
                  <p>ICU used: {actuals_icuBeds_currentUsageTotal}</p>
                ) : (
                  <></>
                )}
                {actuals_icuBeds_currentUsageCovid ? (
                  <p>ICU used for COVID: {actuals_icuBeds_currentUsageCovid}</p>
                ) : (
                  <></>
                )}
              </div>
            </Flexbox>
          )}
          <CenterDiv
            color="black"
            style={{
              fontSize: "3rem",
              color: "white",
              cursor: "pointer",
              margin: "1rem",
            }}
          >
            <Link href={`/${route}`}>
              <div>
                <GoArrowLeft />
              </div>
            </Link>
          </CenterDiv>
        </CardContainer>
      )}
    </Link>
  );
};

export default Card;
