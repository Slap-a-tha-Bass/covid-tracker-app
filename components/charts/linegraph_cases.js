import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraphCases = () => {
  const router = useRouter();
  const { stateid } = router.query;
  const [stateData, setStateData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [longLoad, setLongLoad] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.covidactnow.org/v2/state/${stateid}.timeseries.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f`
    )
      .then((res) => res.json())
      .then((stateData) => {
        setStateData(stateData);
        setLongLoad(true);
      });
    setTimeout(() => setIsLoaded(true), 1000);
  }, []);
  let casesArray;
  if (longLoad && isLoaded) {
    if (stateData) {
      casesArray = stateData.actualsTimeseries.map((data) => data.cases);
      if (casesArray.indexOf(null)) {
        casesArray.splice(casesArray.indexOf(null), 1);
    }
}
}
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            color: "white",
            font: {
                size: 24,
            },
            text: "State Cases Time Series",
        },
    },
};
let labelsArray;
if(casesArray){
    labelsArray = new Array(casesArray.length + 25);
}
let labels;
if(labelsArray){
    labels = labelsArray.fill("-");
}
  const data = {
    labels,
    datasets: [
      {
        label: "State Cases",
        color: "white",
        data: casesArray,
        fill: false,
        tension: 0.1,
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "State Positive Tests",
        color: "white",
        data: casesArray,
        fill: false,
        tension: 0.1,
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data}></Line>;
};

export default LineGraphCases;
