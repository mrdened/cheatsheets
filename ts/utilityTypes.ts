/* === keyof для создания объединения типов из ключей (строк) === */
interface Person {
	name: string;
	age: number;
}

type PersonKeys = keyof Person; // получаем константные типы 'name' | 'age'
const a: PersonKeys = 'age'; // Valid
// const b: PersonKeys = '123' // Invalid

//typeoof & keyof
const formData1 = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	id: 123,
};

type ValidationResult = {};

declare function validate<T>(data: T): { [key in keyof T]: boolean };

const r = validate(formData1);
r.id;

//Readonly - сделать все поля только для чтения
type Task = Readonly<{
	id: number;
	text: string;
	isCompleted?: boolean;
	completedDate?: Date | undefined;
}>;

const task: Task = {
	id: 0,
	text: 'text',
};

task.completedDate = new Date();

//Partial - сделать все поля опциональными
type OptionalTask = Partial<Task>;

function update(task: Task, patch: Partial<Task>): Task {
	return {
		...task,
		...patch,
	};
}

//Required - сделать все поля обязательными
type Task2 = Required<{
	id: number;
	text: string;
	isCompleted?: boolean;
	completedDate?: Date | undefined;
}>;

const task2: Task2 = {
	id: 0,
	text: 'text',
};

function getCompleted(tasks: Task[]) {
	return tasks.filter((t) => t.isCompleted && t.completedData) as Required<Task>[];
}

const tasks = getCompleted([task]);
tasks[0].isCompleted;

/* === Выборка === */
type User = {
	// аналогично interface User {}
	_id: number;
	name: string;
	email: string;
	createdAt: Date;
};

type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; //Включаем только перечисленные поля
type UserKeysNoMeta3 = Omit<User, '_id' | 'createdAt'>; //Исключаем только перечисленные поля

//Record<K, T> - определяем поля объекта: ключ и значение
type Obj = Record<string, string>;

type O = Record<'A' | 'B' | 'C', string>;

type ThemeParams = {
	fontSize: number;
	color: string;
};

type Theme = 'light' | 'dark';

type AppTheme = Record<Theme, ThemeParams>;

const t: AppTheme = {
	light: {
		fontSize: 20,
		color: 'red',
	},
	dark: {
		fontSize: 24,
		color: 'orange',
	},
};

// Exclude<T, U> - исключаем из первого типа признаки присущие второму
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>; // Исключаем указанные поля и получаем перечисление литеральных типов 'name' | 'email'

// Extract<T, U> - общие для двух типов признаки
type Intersection = Extract<keyof User, '_id' | 'createdAt'>; // Исключаем указанные поля и получаем перечисление литеральных типов 'name' | 'email'

//NonNullable - удаляем все null и undefined
type T = NonNullable<string | null | undefined>

type Task3 = {
	id: number;
	text: string;
	isCompleted?: boolean;
	completedDate?: Date | undefined;
}

function getTaskDate(date: Task3['completedDate']): NonNullable<Task3['completedDate']>{
	if(!date) return new Date()
	return date
}

const task3: Task3 = {
	id: 0,
	text: 'test'
}

const r3 = getTaskDate(task3.completedDate)

//ReturnType - тип возвращаемого значения из функции
function getInt(n: string){
	return parseInt(n)
}

type R = ReturnType<typeof getInt>

//Parameters - получить тип кортежа аргументов функции
type Input = Parameters<typeof getInt>

//ConstructorParameters - позволяет получить тип данных из аргументов конструктора
class Person {
	constructor(
		public name: string,
		public surname: string,
		public age: number
	) {}
}

type InputClass = ConstructorParameters<typeof Person>

//Awaited<T> - выполняет развертывание промисов
declare function fetch(): Promise<Promise<string>>
type FetchResult = ReturnType<typeof fetch>
type FecthResultInnerPromise = Awaited<ReturnType<typeof fetch>>

// Uppercase | Lowercase | Capitalize | Uncapitalize

type Name = Uppercase<'name'>
type Surname = Lowercase<'Surname'>
type Age = Capitalize<'age'>
type City = Uncapitalize<'City'>


const user2 = {
	name: 'Dened',
	age: 40
}

type User2 = typeof user2;

type WithGetters<T extends string> = Record<`get${Capitalize<T>}`, () => string>

declare function createGetters(u: User2): WithGetters<keyof User>

const userGetters = createGetters(user2)

userGetters.getName()
