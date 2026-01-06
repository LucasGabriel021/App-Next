import React from "react";

// Mapeamento do objeto que a requisição busca
type User = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      }
  },
  phone: string;
  website: string;
  company: {
      name: string;
      catchPhrase: string;
      bs: string
  }
};

async function getUsers(): Promise<User[]> {
  const req = await fetch("https://jsonplaceholder.typicode.com/users");
  const reqJson = await req.json();
  return reqJson;
}

export default async function Page() {
  const usuarios = await getUsers();
  console.log("Usuários: ", usuarios);

  return (
    <>
      <div>Tela de usuários</div>
      <h2>Usuários cadastrados no sistema: </h2>
      <ul>
        {usuarios.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </>
  );
}
