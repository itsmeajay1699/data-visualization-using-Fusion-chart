import { useEffect, useRef, useState } from "react";
import { Axios } from "../utils/index.js";
import BarChart from "../charts/FIrstBarChart.jsx";
import GraphWrapper from "./GraphWrapper.jsx";
import MultiSeries from "./MultiSeries.jsx";
import MultiSeriesChart from "../charts/FirstMultiSeriesChart.jsx";

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

const TaxSaleChart = () => {
  //   const [type, setType] = useState("month");
  //   const [chartType, setChartType] = useState("column2d");
  //   const [chartData, setChartData] = useState([]);

  const [categories, setCategories] = useState([]);
  const [taxData, setTaxData] = useState([]);
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Axios.get(`/fusion-charts/order/sale-tax`);

      let categoriesArr = [];
      let taxArr = [];
      let saleArr = [];
      data.data.data.forEach((d) => {
        categoriesArr.push({ label: d.label });
        taxArr.push({ value: d.taxValue });
        saleArr.push({ value: d.saleValue });
      });

      setCategories(categoriesArr);
      setTaxData(taxArr);
      setSaleData(saleArr);
    };
    fetchData();
  }, []);

  const chartConfigs = {
    type: "mscolumn2d", // The chart type
    // type: "mscolumn3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        theme: "candy",
        caption: "Montly Sales and Tax Analysis",
        xAxisname: "Monthly",
        yAxisName: "Revenues (IN INR)",
        numberPrefix: "₹",
        plotFillAlpha: "80",
        divLineIsDashed: "1",
        divLineDashLen: "1",
        divLineGapLen: "1",
      },
      categories: [
        {
          category: categories,
        },
      ],
      dataset: [
        {
          seriesname: "Tax",
          data: taxData,
        },
        {
          seriesname: "Sale",
          data: saleData,
        },
      ],
    },
  };

  const handleTypeChange = (e) => {
    // setChartType(e.target.innerText.toLowerCase());
    console.log(e.target.innerText);
  };

  return (
    <div className="sales-chart-container">
      <div className="sales-chart-wrapper">
        <h1>Sales And Taxes</h1>
        <GraphWrapper
        //   type={graphTypeForSingleSeries}
        //   handleTypeChange={handleTypeChange}
        //   chartType={chartType}
        //   setChartType={setChartType}
        >
          <MultiSeriesChart chartConfig={chartConfigs} />
        </GraphWrapper>
      </div>
    </div>
  );
};

export default TaxSaleChart;
