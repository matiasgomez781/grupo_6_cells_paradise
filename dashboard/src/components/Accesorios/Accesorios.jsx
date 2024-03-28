import { useState, useEffect } from "react";

export default function Accesorios() {

  const [accesorios, setAccesorios] = useState([]);

  useEffect 



  return (
    <>
      <section id="accesorios" className="main-products">
        <button type="button" className="arrowButton">
          <i className="fa-solid fa-angle-left"></i>
        </button>

        <section className="products-slider"></section>

        <button type="button" className="arrowButton">
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </section>
    </>
  );
}
