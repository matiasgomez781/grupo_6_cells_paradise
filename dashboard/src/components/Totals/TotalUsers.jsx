import { useEffect, useState } from "react";

export default function TotalUsers() {
  const [name, setName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((users) => setName(users));
  }, []);

  return(
    <>
    <section>
        <h3>Cantidad total de usuarios</h3>
        <h1><i class="fa-solid fa-users"></i>{name.length}</h1>
    </section>
    </>
  )
}
