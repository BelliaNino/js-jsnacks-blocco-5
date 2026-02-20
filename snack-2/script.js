const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//metodo for()
for (let i = 0; i < people.length; i++){
  const firstname = people[i].name
  console.log(firstname);
}

//metodo forEach()
people.forEach(firstname => (console.log(firstname.name)))


