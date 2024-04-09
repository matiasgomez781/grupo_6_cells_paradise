import logoCells from "../../assets/logo_cellsparadise.png"
export default function ContenidoMenu() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
                <img src={logoCells} alt="Logo Cells Paradise "/>
            </div>
            <figcaption>
                Cells Paradise
            </figcaption>
        </figure>
        <nav>
            <section className="dicover">
                <h3>Opciones</h3>
                <ul>
                    <li>
                        <a href="#">
                            <i className="bi bi-film" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Productos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-play-circle" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Categorias
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Marcas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-bar-chart"></i>
                            - Mejores descuentos
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-tags"></i>
                            - Todos los usuarios
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="bi bi-graph-up"></i>
                            - Ultimo usuario
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}