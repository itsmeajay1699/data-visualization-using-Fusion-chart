// import React from "react";
// import FusionCharts from "fusioncharts";
// import Charts from "fusioncharts/fusioncharts.charts";
// import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// import ReactFC from "react-fusioncharts";

// // Initialize FusionCharts
// ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

// const MultiSeriesChart = ({ chartConfig }) => {
//   return (
//     <ReactFC
//       type={chartConfig.type}
//       dataFormat={chartConfig.dataFormat}
//       dataSource={chartConfig}
//     />
//   );
// };

// export default MultiSeriesChart;
// Step 1 - Include react

// Step 2 - Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionTheme);

const MultiSeriesChart = ({ chartConfig }) => {
  console.log(chartConfig.type);
  console.log(chartConfig);
  return (
    <ReactFC
      {...chartConfig}
      dataSource={chartConfig}
      //  type={chartConfig.type}
    />
  );
};

export default MultiSeriesChart;
