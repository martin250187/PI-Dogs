const arr = [
  { id: "1", str: "Tengo que buscar una cadena en un string" },
  { id: "2", str: "bdfuif uiahasf hasudhjda udhauid" },
];
const filtro = arr.filter((obj) => obj.id.includes(1));
console.log(filtro);
