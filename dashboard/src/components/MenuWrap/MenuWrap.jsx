import Menu from "../ContenidoMenu/ContenidoMenu";
import LastUsers from "../LastUsers/LastUsers"
import Product from "../Products/Products";
import User from "../Users/User";
import Brand from "../Brands/Brands";
import Categories from "../Categories/Categories";

export default function MenuWrap() {
  return (
    <>
      <main className="content-wrap">
        <Menu />
        <Product />
        <User />
        <Brand />
        <LastUsers />
        <Categories />
      </main>
    </>
  );
}
