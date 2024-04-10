import { useState, useEffect } from "react";
import ProductsOnSale from "./ProductsOnSale";
import style from "./onSale.module.css";

function OnSale() {
  const [onSale, setOnSale] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((products) => {
        let productsFiltered = products.filter((prod) => prod.discount >= 30);
        return setOnSale(productsFiltered);
      });
  }, []);

  return (
    <>
      <main className={style.content}>
        <section className="content">
          <h2 className="mt-3">DESCUENTOS EXCLUSIVOS</h2>
          <br />
          <section className={style.contentProducts}>
            {onSale.map((prod) => (
              <ProductsOnSale prod={prod} key={prod.id} />
            ))}
          </section>
        </section>
      </main>
    </>
  );
}

export default OnSale;
