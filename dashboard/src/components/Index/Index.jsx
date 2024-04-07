import Product from "../Products/Products";
import User from "../Users/User";
import LastUser from "../LastUsers/LastUser";

export default function Index() {
  return (
    <>
      <main className="content-wrap">
        <Product />
        <User />
        <Brand />
        <LastUser />
      </main>
    </>
  );
}
