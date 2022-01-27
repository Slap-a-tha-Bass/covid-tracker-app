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

const LineGraphDeaths = () => {
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
  let deathsArray;
  if (longLoad && isLoaded) {
    if (stateData) {
      deathsArray = stateData.actualsTimeseries.map((data) => data.deaths);
      if (deathsArray.indexOf(null)) {
        deathsArray.splice(deathsArray.indexOf(null), 1);
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
            text: "State Deaths Time Series",
        },
    },
};
let labelsArray;
if(deathsArray){
    labelsArray = new Array(deathsArray.length + 25);
}
let labels;
if(labelsArray){
    labels = labelsArray.fill("-");
}
  const data = {
    labels,
    datasets: [
      {
        label: "State Deaths",
        color: "white",
        axis: "y",
        data: deathsArray,
        fill: false,
        tension: 0.1,
        borderColor: "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={data}></Line>;
};

export default LineGraphDeaths;
