import { useEffect, useState } from "react";
import BrandsList from "./BrandsList";
import style from "./brand.module.css";

export default function Brand() {
  const [brands, setBrand] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/brands")
      .then((respuesta) => respuesta.json())
      .then((brands) => setBrand(brands))
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">Todas las Marcas en nuestra base de datos</h2>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Nombre</th>
              </tr>
            </thead>
            {brands.map((brand) => (
              <BrandsList brands={brand} key={brand.id} />
            ))}
          </table>
        </section>
      </main>
    </>
  );
}
