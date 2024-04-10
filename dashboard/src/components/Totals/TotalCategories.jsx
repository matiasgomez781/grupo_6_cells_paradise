import { useEffect, useState } from "react";

export default function TotalCategories() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((categories) => setName(categories));
  }, []);

  return(
    <>
    <section>
        <h3>Cantidad total de categorías</h3>
        <h1><i class="fa-solid fa-tags"></i>{name.length}</h1>
    </section>
    </>
  )
}
