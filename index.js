const fs = require('fs');

const output = fs.readFileSync('data.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' '))

const productii = output[0];
const neterminale = output[1];
const start = output[3][0] || 'E';
const separator = productii.map(line => line.split('->'));
const split = separator.map(line => line.map(x => x.split('|')));
/**
 * Imi creez un array pe care il umplu cu obiecte pe care le manipulez mai tarziu
 */
let neTerminaleArray = [];
for (let i = 0; i < productii.length; i++) {
    const Object = {};
    Object.name = split[i][0][0];
    Object.tablou = split[i][1];
    neTerminaleArray.push(Object);
}

let final = start;
console.log("inceputul este:", start);

let contor = 0;
/**
 * Iterez peste sirul final pana cand ajung la n caractere , dar si cand sirul nu are neterminale, absolut deloc.
 */
while (final.length < 60 && contor !== final.length) {
    /**
     * Verific de fiecare data tot string-ul final.
     */
    for (let i = 0; i < final.length; i++) {
        const caracter = final[i];
        const gasesteNeterminala = neterminale.includes(caracter);
        if (gasesteNeterminala) {
            /**
             * Gasesc index-ul elementului din neterminale
             */
            const index = neterminale.indexOf(caracter);
            /**
             * Lungimea sirului array-ului cu care lucrez
             */
            const lungimea = neTerminaleArray[index].tablou.length;
            /**
             * Un numar random intre 0 si 1
             */
            const random = Math.floor(Math.random() * lungimea);
            /**
             * Elementul urmator ce va fi inserat in string-ul final.
             */
            const nextElement = neTerminaleArray[index].tablou[random];
            console.log("Schimb elementul ",caracter, " cu ", nextElement);
            /**
             * Schimb neterminalul cu produsul neterminalului respectiv.
             */
            final = final.replace(caracter, nextElement);
            console.log("Sirul actual este: ", final);
            contor = 0;
            i = final.length;
        } else {
            contor++;
        }
    }
}
console.log("-------------------------------------------------------------------")
console.log("Lungimea sfarsitului este:", final.length);
console.log("sfarsitul este:", final);
