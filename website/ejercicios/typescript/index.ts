// Boolean
let muted: boolean = true;
muted = false;

// number
let numerador = 42;
let denominador: number = 42;
let resultado = numerador / denominador;


// string
let nombre: string = "Antonio";
let saludo = `Me llamo ${nombre}`;

// arrays

// array string
let people: string[] = [];
people = ["Isable", "Raul", "Nicole"];
//people.push("9000");

// array number
let numeros: number[] = [];
numeros.push(5);
numeros.push(10);

// array boolean
let misBooleanos: boolean[] = [ true, false, false, true ];


let peopleAndNumbers: Array< string | number | boolean > = [];
peopleAndNumbers.push("Ricardo");
peopleAndNumbers.push(9001);
peopleAndNumbers.push(false);

let miArray = [1, 2, 3, 4];

// enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}

let colorFavorito: Color = Color.Rojo;
console.log(`Mi color favorito es ${colorFavorito}`);

enum FinDeSemana {
    Sabado = "Sabado",
    Domingo = "Domingo"
}

let diaFavorito: FinDeSemana = FinDeSemana.Domingo;


// any
let comodin: any = "Joker";
comodin = { type: "WildCard" };

// Object

let someObject: object = { name: "Antonio", surname: "Madrid" };

let miArrayObjetos: object[] = [];

miArrayObjetos.push(someObject);

let miAnyArray: any[] = [];

// Funciones

function add(a: number, b: number): number {
    return a + b;
}

const sum = add(4,6);

function createAdder(a: number): (number) => number {
    return function(b: number): number {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


function fullName(firstName: string, lastName?: string = "Anonimo"): string {
    return `${firstName} ${lastName}`;
}

const richar = fullName("Richard", "Kaufman");
const antonio = fullName("Antonio");
console.log(antonio);

// interfaces

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto: 6,
    color: Color.Rojo
};

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);


rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());