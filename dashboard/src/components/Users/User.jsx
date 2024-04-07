import { useEffect, useState } from "react";
import UserList from "./UserList";
import style from "./user.module.css"



export default function User() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((respuesta) => respuesta.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <>
      <main className="content-wrap">
        <section className="content">
          <h2 className="mt-3">Todos los Usuarios en nuestra base de datos</h2>
          <table   className={style.table}>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
              </tr>
            </thead>
            {users.map((user) => (
              <UserList users={user} key={user.id} />
            ))}
          </table>
        </section>
      </main>
    </>
  );
}
