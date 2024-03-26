import { Singleton } from './Singleton';

describe('Singleton', (): void => {
	let instance: Singleton;

	beforeEach(() => {
		instance = Singleton.getInstance();
	});

	test('equal to another instance of Singleton', () => {
		const instance2 = Singleton.getInstance();

		expect(instance === instance2).toBeTruthy();
	});

	test('should call methods', () => {
		jest.spyOn(instance, 'someMethod');

		instance.someMethod();

		expect(instance.someMethod).toHaveBeenCalledTimes(1);
	});
});
