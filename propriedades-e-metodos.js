// Propriedades e Métodos do Protótiopo
// Já que tudo em JavaScript é objeto, as propriedades abaixo estão disponíveis em todos os objetos criados a partir de uma função construtora.
// '{}.constructor' retorna a função construtora do objeto.

const frutas = ['Banana', 'Pêra'];
frutas.constructor; // Array

const frase = 'Isso é uma String';
frase.constructor; // String



// {}.hasOwnProperty('prop') e {}.propertyIsEnumerable('prop')
// Verifica se possui a propriedade e retorna 'true'.
// A propriedade deve ser direta do objeto e não do protótipo
// O '{}.propertyIsEnumerable()' verifica se a propriedade é enumerável.

const frutas2 = ['Banana', 'Uva'];

frutas2.hasOwnProperty('map'); //false
Array.hasOwnProperty('map'); //false
Array.prototype.hasOwnProperty('map'); //true

Array.prototype.propertyIsEnumerable('map'); //false
window.propertyIsEnumerable('innerHeigth'); //true



// {}.isPrototypeOf(valor)
// Verifca se é o protótipo do valor passado

const frutas3 = ['Banana', 'Uva'];

Array.prototype.isPrototypeOf(frutas3); //true



// {}.toString()
// Retorna o tipo do Objeto.
// O problema é 'toString()' ser uma função dos protótipos de Array, String e mais.
// Por isso é comum utilizarmos a função direto do 'Object.prototype.toString.call(valor)'.

const frutas4 = ['Banana', 'Uva'];
frutas4.toString(); // 'Banana,Uva'
typeof frutas4; // object
Object.prototype.toString.call(frutas4); // [object Array]

const frase2 = 'Uma String';
frase.toString(); // 'Uma String'
typeof frase2; // string
Object.prototype.toString.call(frase2); // [object String]


const carro = {marca: 'Ford'};
carro.toString(); // [object Object]
Object.prototype.toString.call(carro); // [object Object]

const li = document.querySelectorAll('li');
typeof li; // object
Object.prototype.toString.call(li); // [object NodeList]