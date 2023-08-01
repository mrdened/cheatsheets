/* === Основы === */

function add(a: number, b: number): number {
	return a + b;
}

function toUpperCase(str: string): string {
	return str.trim().toUpperCase(); //Автоматически подхватывает методы относящие к типу
}

const square1: (n: number) => number = (n) => n * n;
const suqare2 = (n: number) => n * n;

/* === Перегрузки === */

interface MyPosition {
	x: number | undefined;
	y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
	default: string;
}

function position(): MyPosition;
function position(a: number): MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number): MyPosition | MyPositionWithDefault {
	if (!a && !b) return { x: undefined, y: undefined };
	if (a && !b) return { x: a, y: undefined, default: a.toString() };
	return { x: a, y: b };
}

console.log('Empty:', position());
console.log('One arg:', position(42));
console.log('Two args:', position(42, 24));
