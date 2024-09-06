import MultiSeriesChart from "../charts/FirstMultiSeriesChart";

const MultiSeries = () => {
  const categories = [
    {
      category: [
        { label: "Q1" },
        { label: "Q2" },
        { label: "Q3" },
        { label: "Q4" },
      ],
    },
  ];
  // STEP 3- Construct the dataset comprising multiple series
  const dataset = [
    {
      seriesname: "Previous Year",
      data: [
        { value: "12000" },
        { value: "10500" },
        { value: "23500" },
        { value: "16000" },
      ],
    },
    {
      seriesname: "Current Year",
      data: [
        { value: "24400" },
        { value: "29800" },
        { value: "20800" },
        { value: "26800" },
      ],
    },
  ];

  // STEP 4 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: "mscolumn2d", // The chart type
    // type: "mscolumn3d", // The chart type
    width: "100%", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      //Chart Configurations
      chart: {
        theme: "fusion",
        caption: "Comparison of Quarterly Revenue",
        xAxisname: "Quarter",
        yAxisName: "Revenues (In USD)",
        numberPrefix: "$",
        plotFillAlpha: "80",
        divLineIsDashed: "1",
        divLineDashLen: "1",
        divLineGapLen: "1",
      },
      categories: categories,
      dataset: dataset,
    },
  };
  return (
    <div>
      <MultiSeriesChart chartConfig={chartConfigs} />
    </div>
  );
};

export default MultiSeries;
