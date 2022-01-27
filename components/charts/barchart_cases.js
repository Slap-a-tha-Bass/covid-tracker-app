import { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartCases = (State_Cases) => {
  const [usData, setUsData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(
      "https://api.covidactnow.org/v2/states.json?apiKey=581c8a2b25554c5bad57cc34b0b2538f"
    )
      .then((res) => res.json())
      .then((usData) => {
        setUsData(usData);
        setIsLoaded(true);
      });
  }, []);

  if (!isLoaded) return <h1 className="typewriter">Loading...</h1>;
  let averageCasesPerState;
  if (isLoaded) {
    if (usData) {
      const numberArray = usData.map((num, index) =>
        num.actuals.cases ? num.actuals.cases : null
      );
      if (numberArray.indexOf(null)) {
        numberArray.splice(numberArray.indexOf(null), 1);
      }
      const filterData = numberArray.reduce((a, b) => a + b);
      averageCasesPerState = (filterData / numberArray.length).toFixed(0);
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "white",
          font: {
            size: 20,
          },
        },
        position: "top",
      },
      title: {
        display: true,
        text: `Total Cases`,
        color: "white",
        font: {
          size: 24
        },
      },
    },
  };
  const data = {
    datasets: [
      {
        label: `State Cases`,
        data: State_Cases,
        backgroundColor: "red",
      },
      {
        label: "US Average Cases",
        data: [averageCasesPerState],
        backgroundColor: "blue",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default BarChartCases;
