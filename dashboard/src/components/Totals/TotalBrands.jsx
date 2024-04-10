import { useEffect, useState } from "react";

export default function TotalBrands() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/brands")
      .then((response) => response.json())
      .then((brands) => setName(brands));
  }, []);

  return(
    <>
    <section>
        <h3>Cantidad total de marcas</h3>
        <h1><i class="fa-solid fa-tags"></i>{name.length}</h1>
    </section>
    </>
  )
}
