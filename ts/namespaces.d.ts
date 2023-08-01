// Файл декларации (заголовочный файл) = типы без реализации

declare namespace FormNS {
	export type FormType = 'inline' | 'block';
	export type FormState = 'active' | 'disabled';

	export interface FormInfo {
		type: FormType;
		state: FormState;
	}
}
