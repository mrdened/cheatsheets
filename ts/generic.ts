const arrayofNumbers: Array<number> = [1, 2, 3, 4, 5];
const arrayOfStrings: Array<string> = ['h', 'e', 'l', 'l', 'o'];

function reverse<T>(array: T[]): T[] {
	return array.reverse();
}

reverse(arrayofNumbers);
reverse(arrayOfStrings);

//

const cars: string[] = ['Ford', 'Audi'];
const cars2: Array<string> = ['BMW', 'Mersedes'];

const promise1 = new Promise<string>((resolve) => {
	setTimeout(() => {
		resolve('promise resolve');
	}, 2000);
});
const promise2: Promise<number> = new Promise((resolve) => {
	setTimeout(() => {
		resolve(42);
	}, 2000);
});
promise1.then((data) => console.log(data.toLowerCase().trim()));

function mergeObjects<A extends object, B extends object>(a: A, b: B) {
	return Object.assign({}, a, b);
}

const merged = mergeObjects({ name: 'Dened' }, { age: 27 });
console.log(merged);

//

interface ILength {
	length: number;
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
	return {
		value,
		count: `${value.length}`,
	};
}
console.log(withCount('String'));
console.log(withCount([1, 2, 3]));

//
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
	return obj[key];
}

const person = {
	name: 'Dened',
};
console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age')); // Not valid

//Classes
class Collection<T extends string | number | boolean> {
	constructor(private _items: T[] = []) {}

	add(item: T) {
		this._items.push(item);
	}

	remove(item: T) {
		this._items = this._items.filter((i) => i !== item);
	}

	get items(): T[] {
		return this._items;
	}
}

const strings = new Collection<string>(['i', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings);

// Partial

interface Car {
	model: string;
	year: number;
}

function createAndValidateCar(model: string, year: number): Car {
	const car: Partial<Car> = {};

	if (model.length > 3) car.model = model;
	if (year > 2000) car.year = year;

	return car as Car;
}

// readonly
const cars3: Readonly<Array<string>> = ['Ford', 'Audi'];
// cars3.shift() // Not valid

const ford: Readonly<Car> = {
	model: 'Ford',
	year: 2023,
};
// ford.model = 'Lada' // Not Valid

/* === Параметризация === */

interface Page<T> {
	title: string;
	content: string;
	lang: T;
}

function getPage<T>(title: string, content: string, lang: T): Page<T> {
	return { title, content, lang };
}

class AppPage<T> {
	constructor(private title: string, private content: string, private lang: T) {}

	public get page() {
		return getPage(this.title, this.content, this.lang);
	}
}

enum lang {
	ru = 'ru',
	en = 'en',
}

const appPage1 = new AppPage('App', 'Hello, TS', lang.en);
appPage1.page; // Page<lang>

const appPage2 = new AppPage('App', 'Hello, TS', lang.en as const);
appPage2.page; // Page<lang.en>

const appPage3 = new AppPage('App', 'Hello, TS', 'en');
appPage3.page; // Page<string>

const appPage4 = new AppPage('App', 'Hello, TS', 'en' as const);
appPage4.page; // Page<'en'>

/* === Поли-параметризация === */

interface Page2<W, H, T> {
	width: W;
	height: H;
	title: T;
}

const page: Page2<700 | 900 | 1200, number, 'App' | 'About' | 'Log'> = {
	width: 700,
	height: 9000,
	title: 'Log',
};

function random<A, B>(a: A, b: B): A | B {
	return Math.random() > 0.5 ? a : b;
}

// Явное указание
const r1 = random<string, number>('a', 1); //'string' | number

// Вывод минимально возможнных типов
const r2 = random('a', 1); // 'a' | 1
