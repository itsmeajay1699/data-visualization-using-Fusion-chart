import React, { useEffect, useState } from "react";
import { Axios } from "../utils";
import GraphWrapper from "./GraphWrapper";
import StackMultiSeriesChart from "./StackedChart";

const CustomerCityAndProvince = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "/fusion-charts/customer/city-province"
        );
        const data = response.data.data;

        const categories = [];
        const dataset = [];

        const cityDataset = {};

        data.forEach((item) => {
          categories.push({ label: item.label });

          item.city.forEach((cityData) => {
            if (!cityDataset[cityData.city]) {
              cityDataset[cityData.city] = new Array(data.length).fill({
                value: "0",
              }); // Initialize with zeros
            }
            const index = categories.findIndex(
              (cat) => cat.label === item.label
            );
            cityDataset[cityData.city][index] = { value: cityData.count };
          });
        });

        // Create dataset entries for each city
        Object.keys(cityDataset).forEach((city) => {
          dataset.push({
            seriesname: city,
            data: cityDataset[city],
          });
        });

        setCategory(categories);
        setData(dataset);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const chartConfig = {
    type: "stackedcolumn2d",
    renderAt: "chart-container",
    width: "100%",
    height: "600",
    dataFormat: "json",
    chart: {
      caption: "Customer Distribution by City and Province",
      subCaption: "For current year",
      xAxisName: "Province",
      yAxisName: "Customer Count",
      showSum: "1",
      theme: "candy",
    },
    categories: [
      {
        category: category,
      },
    ],
    dataset: data,
  };

  return (
    <div className="sales-chart-container">
      <div className="sales-chart-wrapper">
        <h1>City and Province</h1>
        <GraphWrapper>
          <StackMultiSeriesChart chartConfig={chartConfig} />
        </GraphWrapper>
      </div>
    </div>
  );
};

export default CustomerCityAndProvince;
