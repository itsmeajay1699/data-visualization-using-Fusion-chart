import { useEffect, useState } from "react";
import GraphWrapper from "./GraphWrapper";
import { Axios } from "../utils";
import BarChart from "../charts/FIrstBarChart";

const CustomerAccountUpdateChart = () => {
  const [chartConfig, setChartConfig] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "/fusion-charts/customer/acount-update"
        );

        setChartConfig((prev) => {
          return {
            type: "line", // The chart type
            width: "100%", // Width of the chart
            height: "500", // Height of the chart
            dataFormat: "json", // Data type
            dataSource: {
              chart: {
                caption: "Customer updated the account analysis", //Set the chart caption
                subCaption: "In number",
                xAxisName: "Month and year", //Set the x-axis name
                yAxisName: "Total number of user", //Set the y-axis name
                theme: "candy",
                PlotfillAlpha: "0",
                placeValuesInside: "0",
                rotateValues: "0",
                valueFontColor: "#333333",
              },
              data: response.data.data,
            },
          };
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="sales-chart-container">
      <div className="sales-chart-wrapper">
        <h1>Account Update Trend</h1>
        <GraphWrapper>
          <BarChart chartConfig={chartConfig} />
        </GraphWrapper>
      </div>
    </div>
  );
};

export default CustomerAccountUpdateChart;
