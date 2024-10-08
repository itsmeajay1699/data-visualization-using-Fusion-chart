import Axios from "axios";

// Preparing the chart data
const chartData = [
    {
        label: "Venezuela",
        value: "290"
    },
    {
        label: "Saudi",
        value: "260"
    },
    {
        label: "Canada",
        value: "180"
    },
    {
        label: "Iran",
        value: "140"
    },
    {
        label: "Russia",
        value: "115"
    },
    {
        label: "UAE",
        value: "100"
    },
    {
        label: "US",
        value: "30"
    },
    {
        label: "China",
        value: "30"
    }
];


Axios.defaults.baseURL = "https://data-visualization-using-d3.onrender.com/api";


export { chartData, Axios };
