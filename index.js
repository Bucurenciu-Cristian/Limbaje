const fs = require('fs');

const output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' '))

const productii = output[0];
const neterminale = output[1];
const terminale = output[2];
const start = output[3];
const directia = output[4];
const test = productii
    .map(line => line
        .split('->'));
const split = test
    .map(line => line
        .map(x => x
            .split('|')
        )
    );

let neTerminaleArray = [];

for (let i = 0; i < productii.length; i++) {
    const Object = {};
    Object.name = split[i][0][0];
    Object.tablou = split[i][1];
    neTerminaleArray.push(Object);
}

let initialString = start[0];

let final = initialString;
let intermediar = '';

const newVar = [...final];
newVar.splice(0, 1, 'Salut');
console.log(newVar)
while (final.length < 60) {
    console.log("iteratii-while: -------------------------------------------", final.length);
    for (let i = 0; i < 60; i++) {
        // console.log("final[i]: ", final[i]);
        /**
         * Intreb pentru fiecare caracter din string-ul final daca face parte din terminale
         */
        if (terminale.includes(final[i])) {

            // console.log("P:", terminale);

        } else if (neterminale.includes(final[i])) {
            /**
             * Gasesc index-ul elementului din neterminale
             * @type {number}
             */
            const el = neterminale.indexOf(final[i]);
            /**
             * Un numar random intre 0 si 1
             * @type {number}
             */
            const random = Math.floor(Math.random() * 2);
            /**
             * Elementul urmator ce va fi inserat in string-ul final.
             */
            const nextElement = neTerminaleArray[el].tablou[random];
            // console.log("urmatorul element", nextElement);

            // spread operator pentru a face din string un array de charactere.
            //Array.join pentru a readuce array-ul la un string.

            final += nextElement;
            final.splice();
            console.log("finalul este:", final)


        }
    }
}
console.log("Ba esti prost? ",final);

/*let final = '';
while (final.length < 60) {
    for (let i = 0; i < 10; i++) {
        final += i;
    }
    final += " ";
    console.log(final);
}*/
// console.log("Dupa while: ",operation);


// console.log("Neterminale: ", neterminale);
// console.log("Terminale: ",terminale);
// console.log("Start: ",start);
// console.log(directia[0]);

// console.log(JSON.stringify(split, null, 2));
// .reduce((customers, line) => {
//     customers[line[0]] = customers[line[0]]||[];
//     customers[line[0]].push({
//         name: line[1],
//         price: line[2],
//         quantity: line[3]
//     })
//
//     return customers;
//
// }, {});
