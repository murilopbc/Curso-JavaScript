/* Primitivos (imutáveis) - string, number, boolean, undefinded,
null (bigint, symbol) - Valores copiados

Referência (mutável) - arrray, object, function - Valores passados por referência
*/

let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.push();
console.log(a, b);

