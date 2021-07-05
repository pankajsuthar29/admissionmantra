import React, { Component } from "react";
import ChartistGraph from "react-chartist";

class Chart extends Component {
  render() {
    var data = {
      labels: ["35%", "55%", "10%"],
      series: [30, 25, 15],
    };

    var options = {
      labelInterpolationFnc: function (value) {
        return value[0];
      },
    };
    var responsiveOptions = [
      [
        "screen and (min-width: 230px)",
        {
          chartPadding: 10,
          donut: true,
          labelOffset: 40,
          donutWidth: 40,
          labelDirection: "explode",
          labelInterpolationFnc: function (value) {
            return value;
          },
        },
      ],
      [
        "screen and (min-width: 230px)",
        {
          labelOffset: 60,
          chartPadding: 20,
        },
      ],
    ];

    var type = "Pie";

    return (
      <div>
        <ChartistGraph
          data={data}
          options={options}
          responsiveOptions={responsiveOptions}
          type={type}
        />
      </div>
    );
  }
}

export default Chart;
