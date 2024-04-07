import Product from "../Products/Products";
import User from "../Users/User";
import Brand from "../Brands/Brands";

export default function Index() {
  return (
    <>
      <main className="content-wrap">
        <Product />
        <User />
        <Brand />
      </main>
    </>
  );
}
