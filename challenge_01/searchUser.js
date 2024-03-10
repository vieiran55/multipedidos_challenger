const users = [
  { nome: "João", idade: 25, email: "joao@teste.com" },
  { nome: "Maria", idade: 30, email: "maria@teste.com" },
  { nome: "Pedro", idade: 35, email: "pedro@teste.com" },
  { nome: "Harry", idade: 18, email: "harry@teste.com" },
  { nome: "Hermione", idade: 20, email: "hermione@teste.com" },
  { nome: "Ron", idade: 25, email: "ron@teste.com" },
  { nome: "Frodo", idade: 33, email: "frodo@teste.com" },
  { nome: "Gandalf", idade: 99, email: "gandalf@teste.com" },
  { nome: "Luke", idade: 23, email: "luke@teste.com" },
  { nome: "Leia", idade: 22, email: "leia@teste.com" },
  { nome: "Han", idade: 39, email: "han@teste.com" },
  { nome: "Darth", idade: 45, email: "darth@teste.com" },
  { nome: "Yoda", idade: 900, email: "yoda@teste.com" },
  { nome: "Indiana", idade: 40, email: "indiana@teste.com" },
  { nome: "Elsa", idade: 21, email: "elsa@teste.com" }
];

function searchUser(array, value) {
  return new Promise((resolve, reject) => {
    const lowerCaseValue = value.toString().toLowerCase();
    const user = array.find(user =>
      Object.values(user)
        .some(property => {
          if (typeof property === "string") {
            return property.toLowerCase() === lowerCaseValue;
          } else if (typeof property === "number") {
            return property.toString().toLowerCase() === lowerCaseValue;
          }
          return false;
        })
    );
    if (user) {
      resolve(user);
    } else {
      reject("Usuário Não Encontrado.");
    }
  })
    .then(user => {
      console.log("Usuário encontrado:", user);
    })
    .catch(error => {
      console.error("Erro:", error);
    });
}

searchUser(users, "Frodo");


