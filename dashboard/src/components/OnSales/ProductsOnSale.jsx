import style from "./onSale.module.css";

export default function ProductsOnSale({ prod }) {
  return (
    <>
      <article className={style.products}>
        <h2 className={style.subtitle}>{prod.name}</h2>
        <img
          src={"src/assets/products/" + prod.images[0].url}
          alt={prod.name}
          className={style.productImage}
        />
        <h3 className={style.discount}>{prod.discount}% OFF</h3>
        <h2 className={style.subtitle}>
          Precio con descuento: $
          {prod.price - (prod.price * prod.discount) / 100}
        </h2>
      </article>
    </>
  );
}
