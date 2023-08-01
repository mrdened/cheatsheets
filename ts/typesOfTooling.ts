// 1: подхватывает методы соотвествующие типу
function strip(x: string | number) {
	if (typeof x === 'number') return x.toFixed(2);
	return x.trim();
}

// 2: Подхватывает поля соотвествующие классу
class Myresponce {
	header = 'res head';
	result = 'res result';
}

class MyError {
	header = 'err head';
	message = 'err msg';
}

function handle(res: Myresponce | MyError) {
	if (res instanceof Myresponce) {
		return {
			info: res.header + res.result,
		};
	} else {
		return {
			info: res.header + res.message,
		};
	}
}

// 3: Проверка типа входящего аргумента, например, с объединением литералов
type AlertType = 'success' | 'danger' | 'warning';

function setAlertType(type: AlertType) {}

setAlertType('warning');
// setAlertType('default') // Не валидно
