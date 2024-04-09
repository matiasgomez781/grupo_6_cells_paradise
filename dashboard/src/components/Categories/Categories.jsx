import { useState, useEffect } from "react";
import CategoriesList from "./CategoriesList";
import style from "./categories.module.css";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then((response) => response.json())
      .then((categories) => setCategories(categories));
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">
            Categorías en nuestra base de Datos
          </h2>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Nombre</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <CategoriesList categories={category} key={category.id} />
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
}

export default Categories;
