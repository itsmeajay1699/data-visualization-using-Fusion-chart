import BarChart from "../charts/FIrstBarChart";
import { chartData } from "../utils/index.js";
const SingleChart = () => {
  const chartConfigs = {
    type: "column3d",
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        caption: "Countries With Most Oil Reserves [2017-18]", //Set the chart caption
        subCaption: "In MMbbl = One Million barrels", //Set the chart subcaption
        xAxisName: "Country", //Set the x-axis name
        yAxisName: "Reserves (MMbbl)", //Set the y-axis name
        numberSuffix: "K",
        theme: "fusion", //Set the theme for your chart
      },
      data: chartData,
    },
  };
  return (
    <div>
      <BarChart chartConfig={chartConfigs} />
    </div>
  );
};

export default SingleChart;
