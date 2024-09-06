import { useEffect, useRef, useState } from "react";
import { Axios } from "../utils/index.js";
import BarChart from "../charts/FIrstBarChart.jsx";
import GraphWrapper from "./GraphWrapper.jsx";

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

const SaleChart = () => {
  const [type, setType] = useState("month");
  const [chartType, setChartType] = useState("column2d");
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Axios.get(`/fusion-charts/order/sales/${type}`);
      setChartData(data.data.data);
    };
    fetchData();
  }, []);

  const refOne = useRef(null);

  const chartConfigs = {
    type: chartType, // The chart type
    width: "100%", // Width of the chart
    height: "500", // Height of the chart
    dataFormat: "json", // Data type
    ref: refOne,
    dataSource: {
      chart: {
        caption: "Sales of the Order", //Set the chart caption
        subCaption: "In Thousands",
        xAxisName: "Order", //Set the x-axis name
        yAxisName: "Sales (In INR)", //Set the y-axis name
        theme: "candy",
        numberPrefix: "₹",
        // PlotfillAlpha: "0",
        // placeValuesInside: "0",
        // rotateValues: "0",
        // valueFontColor: "#333333",
      },
      data: chartData,
      // annotations: {
      //   width: "500",
      //   height: "300",
      //   autoScale: "1",
      //   groups: [
      //     {
      //       id: "user-images",
      //       xScale_: "20",
      //       yScale_: "20",
      //       items: [
      //         {
      //           id: "butterFinger-icon",
      //           type: "image",
      //           url: "http://static.fusioncharts.com/sampledata/images/butterFinger.png",
      //           x: "$xaxis.label.0.x - 30",
      //           y: "$canvasEndY - 150",
      //           xScale: "50",
      //           yScale: "40",
      //         },
      //         {
      //           id: "tom-user-icon",
      //           type: "image",
      //           url: "http://static.fusioncharts.com/sampledata/images/snickrs.png",
      //           x: "$xaxis.label.1.x - 26",
      //           y: "$canvasEndY - 141",
      //           xScale: "48",
      //           yScale: "38",
      //         },
      //         {
      //           id: "Milton-user-icon",
      //           type: "image",
      //           url: "http://static.fusioncharts.com/sampledata/images/coffee_crisp.png",
      //           x: "$xaxis.label.2.x - 22",
      //           y: "$canvasEndY - 134",
      //           xScale: "43",
      //           yScale: "36",
      //         },
      //         {
      //           id: "Brian-user-icon",
      //           type: "image",
      //           url: "http://static.fusioncharts.com/sampledata/images/100grand.png",
      //           x: "$xaxis.label.3.x - 22",
      //           y: "$canvasEndY - 131",
      //           xScale: "43",
      //           yScale: "35",
      //         },
      //       ],
      //     },
      //   ],
      // },
      // annotations: {
      //   groups: [
      //     {
      //       items: [
      //         {
      //           id: "dyn-labelBG",
      //           type: "rectangle",
      //           radius: "3",
      //           x: "1150",
      //           y: "60",
      //           tox: "1000",
      //           toy: "100",
      //           color: "#0075c2",
      //           alpha: "70",
      //           origW: "400",
      //           origH: "300",
      //         },
      //         {
      //           id: "text-10",
      //           type: "text",
      //           radius: "3",
      //           Text: "Text Hello world kya hal hai",
      //           x: "1150",
      //           y: "60",
      //           wrap: "1",
      //           tox: "1000",
      //           toy: "100",
      //           color: "#fffffff",
      //           alpha: "70",
      //           origW: "400",
      //           origH: "300",
      //         },
      //       ],
      //     },
      //   ],
      // },
    },
  };

  const handleTypeChange = (e) => {
    setChartType(e.target.innerText.toLowerCase());
    console.log(e.target.innerText);
  };

  return (
    <div className="sales-chart-container">
      <div className="sales-chart-wrapper">
        <h1>Sales</h1>
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

export default SaleChart;
