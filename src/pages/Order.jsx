import MostFrequentBuyingProductChart from "../components/MostFrequentBuyingProductChart";
import MultiseriesCombination from "../components/MultiseriesCombination";
import SaleChart from "../components/SaleChart";
import TaxSaleChart from "../components/TaxSaleChart";

const Order = () => {
  return (
    <div className="order-wrapper">
      <div className="order-chart-container">
        <SaleChart />
        <TaxSaleChart />
        <MostFrequentBuyingProductChart />
        <MultiseriesCombination />
      </div>
    </div>
  );
};

export default Order;
