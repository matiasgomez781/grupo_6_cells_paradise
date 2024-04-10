import { Route, Routes } from "react-router-dom";

import LastUsers from "../LastUsers/LastUsers";
import Product from "../Products/Products";
import User from "../Users/User";
import Brand from "../Brands/Brands";
import Categories from "../Categories/Categories";
import OnSale from "../OnSales/OnSale";
import Error404 from "../Error404/Error404";

export default function MenuWrap() {
  return (
    <>
      <main className="content-wrap">
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/users" element={<User />} />
          <Route path="/brands" element={<Brand />} />
          <Route path="/lastUser" element={<LastUsers />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/onSale" element={<OnSale />} />
          <Route component={Error404} />
        </Routes>
      </main>
    </>
  );
}
