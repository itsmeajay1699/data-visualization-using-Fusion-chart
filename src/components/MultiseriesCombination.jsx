import { useEffect, useState } from "react";
import { Axios } from "../utils/index.js";
import GraphWrapper from "./GraphWrapper.jsx";
import MultiSeriesChart from "../charts/FirstMultiSeriesChart.jsx";

const MultiseriesCombination = () => {
  //   const [type, setType] = useState("month");
  //   const [chartType, setChartType] = useState("column2d");
  //   const [chartData, setChartData] = useState([]);

  const [categories, setCategories] = useState([]);
  const [taxData, setTaxData] = useState([]);
  const [saleData, setSaleData] = useState([]);
  const [profit, setProfit] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await Axios.get(`/fusion-charts/order/sale-tax`);

      let categoriesArr = [];
      let taxArr = [];
      let saleArr = [];
      let profitArr = [];
      data.data.data.forEach((d) => {
        categoriesArr.push({ label: d.label });
        taxArr.push({ value: d.taxValue });
        saleArr.push({ value: d.saleValue });
        profitArr.push({
          value: d.saleValue - d.taxValue,
        });
      });

      setCategories(categoriesArr);
      setTaxData(taxArr);
      setSaleData(saleArr);
      setProfit(profitArr);
    };
    fetchData();
  }, []);

  const chartConfigs = {
    type: "mscombi2d", // The chart type
    // type: "mscolumn3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      chart: {
        theme: "candy",
        caption: "Montly Sales and Tax and Profit Analysis",
        xAxisname: "Monthly",
        yAxisName: "Revenues (IN INR)",
        numberPrefix: "₹",
        plotFillAlpha: "80",
        divLineIsDashed: "1",
        divLineDashLen: "1",
        divLineGapLen: "1",
        paletteColors: "#FF0000,#0075c2,#1aaf5d",
        legendBorderAlpha: "0",
        legendShadow: "0",
        showAxisLines: "0",
        showAlternateHGridColor: "0",
        divlineThickness: "1",
        xAxisName: "Day",
        showValues: "0",
        showBorder: "0",
        showShadow: "0",
      },
      categories: [
        {
          category: categories,
        },
      ],
      dataset: [
        {
          seriesname: "Tax",
          renderAs: "line",
          data: taxData,
        },
        {
          seriesname: "Sale",
          renderAs: "column",
          data: saleData,
        },
        {
          seriesname: "Profit After Tax",
          renderAs: "area",
          data: profit,
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
        <h1>Sales,Tax and Profit</h1>
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

export default MultiseriesCombination;
