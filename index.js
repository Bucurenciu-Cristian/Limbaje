const fs = require('fs');

const output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' '))

const productii = output[0];
const neterminale = output[1];
const terminale = output[2];
let start = output[3][0];
const directia = output[4];
const separator = productii.map(line => line.split('->'));
const split = separator.map(line => line.map(x => x.split('|')));

let neTerminaleArray = [];
/**
 * In acest for de mai jos creez array-ul cu obiectele pe care le manipulez mai jos.
 */
for (let i = 0; i < productii.length; i++) {
    const Object = {};
    Object.name = split[i][0][0];
    Object.tablou = split[i][1];
    neTerminaleArray.push(Object);
}
console.log(neTerminaleArray);
console.log(start);
while (start.length < 60) {
    let i = 0;
    while (i < start.length) {
        console.log("iteratia while-ului  al doilea este: ", i, " iar start[i]: ", start[i]);
        if (neterminale.includes(start[i])) {
            /**
             * Gasesc index-ul elementului din neterminale
             */
            const el = neterminale.indexOf(start[i]);
            console.log("indexul din neTerminaleArray este: ", el);
            /**
             * Un numar random intre 0 si 1
             */
            const random = Math.floor(Math.random() * 2);
            /**
             * Elementul urmator ce va fi inserat in string-ul final.
             */
            const nextElement = neTerminaleArray[el].tablou[random];
            start[i];
            //functie pentru substring de la poz 0 pana la poz neterminalului
            const leftPart =  null;
            //functie neterminal +1 pana la final sa imi ia.
            const rightPart =  null;
            // start.replace(start[i], nextElement);
            start += nextElement;
        }
        i++;
    }
}


console.log("---------------!!-----------------------!!-------")
console.log("Neterminale: ", neterminale);
console.log("Terminale: ", terminale);
console.log("Start: ", start);

console.log("directia :", directia);

/*
console.log(JSON.stringify(split, null, 2));
.reduce((customers, line) => {
    customers[line[0]] = customers[line[0]]||[];
    customers[line[0]].push({
        name: line[1],
        price: line[2],
        quantity: line[3]
    })

    return customers;

}, {});
*/
