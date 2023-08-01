/* === Основы: ES6 классы === */
//Свойства типизируются как переменные, методы - как функции
class Typescript {
	version: string;

	constructor(version: string) {
		this.version = version;
	}

	info = (name: string) => `[${name}]: typescript version is ${this.version}`;
}

// readonly, геттеры/сеттеры
class Car1 {
	model: string;
	readonly numberOFWheels: number = 4;

	constructor(theModel: string) {
		this.model = theModel;
	}

	get carModel() {
		return this.model;
	}
	// set setModel(numWheels: number){this.numberOFWheels = numWheels} //Нельзя переопределять read-only свойство
}

/* === Модификаторы доступа === */
// public - по умолчанию, без указания
// private - только для внутреннего использования в только данном класса
// protected - аналогия private с наследованием в дочерние классы

class Animal {
	protected voice: string = '';
	public color: string = 'black';

	constructor() {
		this.go();
	}

	private go() {
		console.log('go');
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
	}

	public walk(): void {
		// this.go() //Нельзя вызвать приватнsq метод родительского класса
	}
}

const cat = new Cat();
// cat.voice = 'test' //Нельзя обращаться извне к защищенному полю класса
cat.setVoice('test');
cat.color = 'white';

/* === Абстрактные классы и асбтрактные методы === */
abstract class Component0 {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component0 {
	render(): void {
		console.log('Component on render');
	}
	info(): string {
		return 'info of component';
	}
}
