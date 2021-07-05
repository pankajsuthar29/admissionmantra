import "chartjs-plugin-streaming";
import React from "react";
import { Line } from "react-chartjs-2";
var createReactClass = require("create-react-class");

const data = {
  datasets: [
    {
      label: "My First dataset",
      pointBackgroundColor: "#fff",
      borderColor: "#552368",
      backgroundColor: "#552368",
      lineTension: 0,
      data: [],
      pointBorderWidth: 0,
      pointRadius: 0,
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
  },
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
    xAxes: [
      {
        display: false,
        type: "realtime",
        realtime: {
          onRefresh: function () {
            data.datasets[0].data.push({
              x: Date.now(),
              y: Math.random() * 100,
            });
          },
          delay: 2000,
        },
      },
    ],
  },
  title: {
    display: false,
  },
};

export default createReactClass({
  displayName: "Latency",
  render() {
    return (
      <div>
        <Line data={data} options={options} height={100} />
      </div>
    );
  },
});
