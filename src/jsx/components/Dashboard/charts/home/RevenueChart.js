import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";

{
   /* Revenue Chart Start */
}
class RevenueChart extends Component {
   constructor(props) {
      super(props);

      this.state = {
         series: [
            {
               name: "Net Profit",
               data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
            },
            {
               name: "Revenue",
               data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
            },
         ],
         options: {
            colors: ["#450b5a", "#ff2c53"],
            chart: {
               type: "bar",
               height: 350,
            },
            plotOptions: {
               bar: {
                  horizontal: false,
                  columnWidth: "40%",
                  endingShape: "rounded",
               },
            },
            dataLabels: {
               enabled: false,
            },
            stroke: {
               show: true,
               width: 2,
               colors: ["transparent"],
            },
            xaxis: {
               categories: [
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
               ],
            },
            yaxis: {
               title: {
                  text: "$ (thousands)",
               },
            },
            fill: {
               opacity: 1,
            },
            tooltip: {
               y: {
                  formatter: function (val) {
                     return "$ " + val + " thousands";
                  },
               },
            },
         },
      };
   }
   render() {
      return (
         <>
            <ReactApexChart
               options={this.state.options}
               series={this.state.series}
               type="bar"
               height={350}
            />
         </>
      );
   }
}

export default RevenueChart;
