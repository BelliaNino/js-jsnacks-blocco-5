const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'


//metodo for()
for (let i = 0; i < names.length; i++){
    const singleName = names[i];
    console.log(singleName);
}

//metodo forEach() 
names.forEach(person => {console.log(person);})
