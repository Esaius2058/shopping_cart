import { Outlet } from "react-router-dom";

const ShopWrapper = () => {
  return (
    <div className="shop-wrapper">
      <Outlet />
    </div>
  );
};

export default ShopWrapper;
