import CustomerCityAndProvince from "../components/CustomerCityAndProvince";
import CustomerAccountUpdateChart from "../components/CustomerAccountUpdateChart";

const Customer = () => {
  return (
    <div className="order-wrapper">
      <div className="order-chart-container">
        <CustomerCityAndProvince />
        <CustomerAccountUpdateChart />
      </div>
    </div>
  );
};

export default Customer;
