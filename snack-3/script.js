const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

//metodo for()
let plusOne = []

    for(let i = 0; i < numbers.length; i++){
        const newNumber = (numbers[i] + 1)
        plusOne.push(newNumber)
    }
console.log(plusOne);

//metodo map()
const oneMore = numbers.map(num => num + 1);
console.log(oneMore);
