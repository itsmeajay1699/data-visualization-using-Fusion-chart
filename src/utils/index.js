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


Axios.defaults.baseURL = "http://localhost:5000/api";


export { chartData, Axios };
