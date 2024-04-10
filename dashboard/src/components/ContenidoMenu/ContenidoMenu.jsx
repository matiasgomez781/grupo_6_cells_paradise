import logoCells from "../../assets/logo_cellsparadise.png";
import { Link } from "react-router-dom";
import MenuWrap from "../MenuWrap/MenuWrap";
import TotalProducts from "../Totals/TotalProducts";
import TotalUsers from "../Totals/TotalUsers";
import TotalCategories from "../Totals/TotalCategories";
import TotalBrands from "../Totals/TotalBrands";

export default function ContenidoMenu() {
  return (
    <header className="menu-wrap">
      <figure className="user">
        <div className="user-avatar">
          <img src={logoCells} alt="Logo Cells Paradise " />
        </div>
        <figcaption>Cells Paradise</figcaption>
      </figure>
      <nav>
        <section className="dicover">
          <h3>Opciones</h3>
          <ul style={{ display: "flex", justifyContent: "space-around" }}>
            <li>
              <Link to="/products">Productos</Link>
            </li>
            <li>
              <Link to="/categories">Categorias</Link>
            </li>
            <li>
              <Link to="/brands">Marcas</Link>
            </li>
            <li>
              <Link to="/onSale">Mejores descuentos</Link>
            </li>
            <li>
              <Link to="/users">Todos los usuarios</Link>
            </li>
            <li>
              <Link to="/lastUser">Ultimo usuario</Link>
            </li>
          </ul>
        </section>
      </nav>
      <article style={{display: "flex", justifyContent: "space-around"}}>
      <TotalProducts />
      <TotalUsers />
      <TotalCategories />
      <TotalBrands />
      </article>
      <MenuWrap />
    </header>
  );
}
