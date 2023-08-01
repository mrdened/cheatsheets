// TypeScript система модулей: ambient module declaration (ака заголовочный файл) - не работает при isolateModules: true
/// <reference path="./namespaces.d.ts" />

namespace FormNS {
	class MyForm {
		private type: FormType = 'inline';
		private state: FormState = 'active';

		constructor(public email: string) {}

		getInfo(): FormInfo {
			return {
				type: this.type,
				state: this.state,
			};
		}
	}

	export const form1 = new MyForm('dened@deltas.net'); // Даем доступ к объектам снаружи
}

console.log(FormNS.form1); // Получаем доступ к объектам из пространства имен
