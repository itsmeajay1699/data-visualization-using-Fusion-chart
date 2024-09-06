import React, { useEffect, useState } from "react";
import GraphWrapper from "./GraphWrapper";
import BarChart from "../charts/FIrstBarChart";
import { Axios } from "../utils";
const graphTypeForSingleSeries = [
  "column2d",
  "bar2d",
  "line",
  "area2d",
  "spline",
  "area",
  "column",
  "bar",
  "pie2d",
  "doughnut2d",
  "pareto2d",
  "pareto3d",
];

const MostFrequentBuyingProductChart = () => {
  const [type, setType] = useState("month");
  const [chartType, setChartType] = useState("column2d");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Axios.get("/fusion-charts/order/byTitle");
        setChartData(data.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(chartData);

  const chartConfigs = {
    type: chartType, // The chart type
    width: "100%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Sales of the Order", //Set the chart caption
        subCaption: "In Thousands",
        xAxisName: "Order", //Set the x-axis name
        yAxisName: "Sales (In INR)", //Set the y-axis name
        theme: "candy",
      },
      annotations: {
        groups: [
          {
            id: "anchor-highlight",
            items: [
              {
                id: "high-star",
                type: "circle",
                x: "$dataset.0.set.22.x",
                y: "129",
                radius: "12",
                color: "#cc0000",
                border: "2",
                borderColor: "#0075c2",
              },
              {
                id: "label",
                type: "text",
                text: "Hottest Month",
                fillcolor: "#0075c2",
                rotate: "90",
                x: "$dataset.0.set.7.x+75",
                y: "$dataset.0.set.7.y-2",
              },
            ],
          },
        ],
      },
      data: chartData,
    },
  };

  const handleTypeChange = (e) => {
    setChartType(e.target.innerText.toLowerCase());
    console.log(e.target.innerText);
  };
  return (
    <div className="sales-chart-container">
      <div className="sales-chart-wrapper">
        <h1>Frequent Product</h1>
        <GraphWrapper
          type={graphTypeForSingleSeries}
          handleTypeChange={handleTypeChange}
          chartType={chartType}
          setChartType={setChartType}
        >
          <BarChart chartConfig={chartConfigs} />
        </GraphWrapper>
      </div>
    </div>
  );
};

export default MostFrequentBuyingProductChart;
