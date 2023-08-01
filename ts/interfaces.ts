/* === Основы === */
interface Rect {
	readonly id: string; 	//Поле только для чтения
	color?: string; 		// Необязательное поле
	size: {
		width: number;
		height: number;
	};
}

interface Props{
	[key: string]: number //Неограниченное количество ключей
}

const rect1: Rect = {
	id: '1234',
	size: {
		width: 20,
		height: 30,
	},
	color: '#333',
};

const rect2: Rect = {
	id: '1234',
	size: {
		width: 10,
		height: 5,
	},
};
rect2.color = 'black'; // Дополняем необязательное поле после создания
// rect2.id = '123'; //Нельзя изменить поле "только дял чтения"

// const quad: Rect | Props = {} //Нельзя объединять интерфейсы

// Другие способы
const rect3 = {} as Rect;
const rect4 = <Rect>{};

/* === Inheritance (наследование) === */

interface RectWithArea extends Rect {
	getArea: () => number;
}

const rect5: RectWithArea = {
	id: '4312',
	size: {
		width: 20,
		height: 20,
	},
	getArea(): number {
		return this.size.width * this.size.height;
	},
};

// Class

interface IClock {
	time: Date;
	setTime(date: Date): void;
}

class Clock implements IClock {
	time: Date = new Date();
	setTime(date: Date): void {
		this.time = date;
	}
}

// Object with  large number of dynamic keys

interface Styles {
	[key: string]: string;
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '2px',
	borderRadius: '5px',
};
