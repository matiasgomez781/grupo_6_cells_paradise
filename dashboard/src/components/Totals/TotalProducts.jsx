import { useEffect, useState } from "react";

export default function TotalProducts() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((products) => setName(products));
  }, []);

  return(
    <>
    <section>
        <h3>Cantidad total de productos</h3>
        <h1><i class="fa-solid fa-mobile-screen-button"></i>{name.length}</h1>
    </section>
    </>
  )
}
