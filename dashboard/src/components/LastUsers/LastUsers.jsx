import React, { useState, useEffect } from "react";
import LastUserList from "./LastUserList";
import style from "./LastUser.module.css";

function UltimosUsuariosCreados() {
  const [ultimosUsuarios, setUltimosUsuarios] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data.pop()))
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">
            Ultimos usuarios creados en nuestra base de Datos
          </h2>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            {ultimosUsuarios.map((ultimoUsuario) => {
              <LastUserList users={ultimoUsuario} key={ultimoUsuario.id} />;
            })}
          </table>
        </section>
      </main>
    </>
  );
}

export default UltimosUsuariosCreados;
