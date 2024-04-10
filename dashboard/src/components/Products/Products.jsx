import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import style from "./product.module.css";

export default function Product() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((respuesta) => respuesta.json())
      .then((product) => setProduct(product));
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">Todos los Productos en nuestra base de datos</h2>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Descripción</th>
              </tr>
            </thead>
            {products.map((product) => (
              <ProductList products={product} key={product.id} />
            ))}
          </table>
        </section>
      </main>
    </>
  );
}
