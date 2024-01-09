import React from "react";
import Chart from 'chart.js/auto';

export default function Chart() {
  const labelsBarChart = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
  ];
  const dataBarChart = {
    labels: labelsBarChart,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "hsl(252, 82.9%, 67.8%)",
        borderColor: "hsl(252, 82.9%, 67.8%)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

  const configBarChart = {
    type: "bar",
    data: dataBarChart,
    options: {},
  };

  var chartBar = new Chart(document.getElementById("chartBar"), configBarChart);
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      <div className="py-3 px-5 bg-gray-50">Bar chart</div>
      <canvas className="p-10" id="chartBar"></canvas>
    </div>
  );
}
