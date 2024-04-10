import logoCells from "../../assets/logo_cellsparadise.png";
import { Link } from "react-router-dom";
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
          <ul>
            <li>
              <Link to="/products">
                <i
                  className="bi bi-film"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Productos
              </Link>
            </li>
            <li>
              <Link to="/categories">
                <i
                  className="bi bi-play-circle"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Categorias
              </Link>
            </li>
            <li>
              <Link to="/brands">
                <i
                  className="bi bi-person"
                  style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                ></i>
                - Marcas
              </Link>
            </li>
            <li>
              <Link to="/onSale">
                <i className="bi bi-bar-chart"></i>- Mejores descuentos
              </Link>
            </li>
            <li>
              <Link to="/users">
                <i className="bi bi-tags"></i>- Todos los usuarios
              </Link>
            </li>
            <li>
              <Link to="/lastUser">
                <i className="bi bi-graph-up"></i>- Ultimo usuario
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}
