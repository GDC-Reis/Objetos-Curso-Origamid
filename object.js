// Object
// Todos objeto é criado com o construtor 'Object' e por isso herda as suas propriedades e métodos do seu prototype.

// const carro = {
//     marca: 'Ford',
//     ano: 2018,
// };

const pessoa = new Object ({
    nome: 'Gustavo',
    idade: 23,
});




// Métodos de Object
// 'Object.create(obj, defineProperties)' retorna um novo objeto que terá como protótipo o objeto do primeiro argumento

const carro = {
    rodas: 4,
    init(marca) {
        this.marca = marca;
        return this; // this -> objeto inteiro
    },
    acelerar() {
        return `${this.marca} acelerou as ${this.rodas} rodas`;
    },
    buzinar() {
        return this.marca + ' buzinou';
    },
}

const honda = Object.create(carro); // Objeto -> carro
honda.init('Honda').acelerar(); // Não muda 'marca' do prototype;

const ferrari = Object.create(carro).init('Ferrari');



// Object.assing()
// 'Object.assing(alvo, obj1, obj2)' adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos.
// O assing irá modificar o objeto alvo.

const funcaoAutomovel1 =  {
    acelerar() {
        return 'acelerou';
    },
    buzinar() {
        return 'buzinou';
    },
};

const moto = {
    rodas: 2,
    capacete: true,
};

const carro1 = {
    rodas: 4,
    mala: true,
};

Object.assign(moto, funcaoAutomovel1);
Object.assign(carro1, funcaoAutomovel1);



// Object.defineProperties()
// 'Object.defineProperties(alvo, propriedades)', adiciona ao alvo novas propriedades.
// A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

const moto2 = {};

Object.defineProperties(moto2, {
    rodas: {
        value: 2,
        configurable: false, // impede deletar e mudança de valor
        enumerable: true, // torna enumerável
    },

    capacete: {
        value: true,
        configurable: true,
        writable: false, // Impede mudança de valor (escreva no item)
    },
});

moto2.rodas = 4;
delete moto2.capacete; // Capacete é deleteval pois é configuravel (configurable: true).
console.log(moto2); // {rodas: 2}

/*
    Existe também o Object.defineProperty, para uma propriedade única.
*/



// get e set
// É possível definirmos diferentes comportamentos para 'get' e 'set' de uma propriedade.
// Lembrando que ao acionarmos uma propriedade 'obj.propriedade', a função 'get' é ativada e ao setarmos 'obj.propriedade = 'valor' a função de 'set' é ativada.

const moto3 = {};

Object.defineProperties(moto3, {
    velocidade: {
        get() {
            return this._velocidade;
        },
        set(valor) {
            this._velocidade = 'Velocidade ' + valor;
        },
    },
});

/*
    Ao utilizar 'get' e 'set' não pode ser utilizado a propriedade 'value'.
*/



// Object.getOwnPropertyDescriptors(obj)
// Lista doso os métodos e propriedades de um objeto, com as suas devidas configurações.

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades de Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, 'innerHeigth');
// Puxa de uma única propriedade



// Object.keys(obj), Object.values(obj), Object.entries(obj)
// 'Object.keys(obj)' retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto.
// 'Object.values(obj)' retorna uma array com os valores do objeto.
// 'Object.entries(obj)' retorna uma array com array's contendo a chave e o valor.

Object.keys(Array);
// [] vazia, pois não possui propriedades enuméraveis

const carro2 = {
    marca: 'Ford',
    ano: 2019,
};

Object.keys(carro2);
// ['marca', 'ano']

Object.values(carro2);
// ['Ford', '2018']

Object.entries(carro2);
// ['marca', 'Ford'], ['ano', 2019]



// Object.getOwnPropertyNames(obj)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo)

Object.getOwnPropertyNames(Array);
// // ['length', 'name', 'prototype', 'isArray', 'from', 'of']

Object.getOwnPropertyNames(Array.prototype);
// [..., 'filter', 'map', 'every', 'some', 'reduce', ...]

const carro3 = {
    marca: 'Ford',
    ano: 2018,
};

Object.getOwnPropertyNames(carro3);
// ['marca', 'ano']



// Object.getPrototypeOf() e Object.is()
// 'Object.getPrototypeOf()', retorna o protótipo do objeto.
// 'Object.is(obj1, obj2)' verifica se os objetos são iguais e retorna 'true' ou 'false'

const frutas = ['Banana', 'Pêra'];
Object.getPrototypeOf(frutas);
Object.getPrototypeOf(''); //String

const frutas1 = ['Banana', 'Pêra'];
const frutas2 = ['Banana', 'Pêra'];

Object.is(frutas1, frutas2); //false



// Object.freeze(), Object.seal(), Object.preventExtensions()
// 'Object.freeze()' impede qualquer mudança nas propriedades.
// 'Object.seal()' previne a edição de novas propriedades e impede que as atuais sejam deletadas.
// 'Object.preventExtensions()' previne a adição de novas propriedades.

const carro4 = {
    marca: 'Ford',
    ano: 2018,
};

Object.freeze(carro4);
Object.seal(carro4);
Object.preventExtensions(carro4);

Object.isFrozen(carro4); // true
Object.isSealed(carro4); // true
Object.isExtensible(carro4); // false