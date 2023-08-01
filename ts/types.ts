/* === Основы === */
// Type Annotations on Variables
const hello1: string = 'hello';

// Type alias - константы (нельзя переопределять) для типов
type Login = string;
const login: Login = 'admin';

// Union types - объединение типов (или-или)
type ID = string | number;
const id1: ID = 1234;
const id2: ID = '4321';

//Type Assertions - утверждение типа
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

// Literal Types
type misc = 'qwerty' | 42;

/* === Primitives === */
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = 'Hello Typescript';

// null - используется в неинициализированных полях
type SomeType = string | null | undefined;

// any - любой
let variable: any = 42;
variable = 'new string';
variable = [];

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

//Symbol - unique value
const firstName = Symbol("name");
const secondName = Symbol("name");
// firstName === secondName ? 1 : 0 // Can't ever happen

/* === Structures === */
// Array
const numberArray1: number[] = [1, 2, 3];
const words: string[] = ['hello', 'typescript'];

const numberArray1G: Array<number> = [1, 2, 3]; // generic

const contact1: [string, number] = ['Dened', 27]; // Tuple

//readonly - модификатор неизменяемости, "только для чтения"
const numberArray2: readonly number[] = [1, 2, 3];

type ReadonlyTuple = readonly [string, number];
const contact2: ReadonlyTuple = ['Dened', 27];

type ReadonlyNumbersArray = ReadonlyArray<number>;
type ReadonlyNumbersMatrix2x2 = ReadonlyNumbersArray[];
const numberArray2G: ReadonlyNumbersMatrix2x2 = [
	[1, 2, 3],
	[4, 5, 6],
];

type unlimitedKeys = Record<string, number>; //Тип-объект с неограниченным кол-вом ключей

// Object: interface = {}
interface Rect0 {
	size: {
		width: number;
		height: number;
	};
}

interface Rect0 {
    color?: string // можно добавлять новые поля
}

const rect0: Rect0 = {
	size: {
		width: 20,
		height: 30,
	},
};

/* === Functions inference === */
// void - ничего не возвращает
function sayMyName(name: string): void {
	console.log(name);
}
sayMyName('Хайзенберг');

// never - никогда не вернет результат
function throwError(message: string): never {
	throw Error(message);
}
function infinite(): never {
	while (true) {}
}
