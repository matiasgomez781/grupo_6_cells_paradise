import { useEffect, useState } from "react";
import ProductList from "./ProductList";

export default function Product() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((respuesta) => respuesta.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">Todos los Productos en nuestra base de datos</h2>
          <table /*  className={style.table} */>
            <thead>
              <tr>
                <th>Marcas</th>
                <th>Precio</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            {product.map((product) => (
              <ProductList products={product} key={product.id} />
            ))}
          </table>
        </section>
      </main>
    </>
  );
}
