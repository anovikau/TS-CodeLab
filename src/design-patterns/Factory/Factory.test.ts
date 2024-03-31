import { Factory, ConcreteProductA, ConcreteProductB } from './Factory';

describe('Factory', () => {
	let productA: ConcreteProductA;

	beforeEach(() => {
		productA = Factory.createProduct('A');
	});

	test('should create correct different product types', () => {
		const productB: ConcreteProductB = Factory.createProduct('B');

		expect(productA instanceof ConcreteProductA).toBeTruthy();
		expect(productB instanceof ConcreteProductB).toBeTruthy();
	});

	test('should call the use method correctly', () => {
		console.log = jest.fn();

		productA.use();

		expect(console.log).toHaveBeenCalledTimes(1);
		expect(console.log).toHaveBeenCalledWith('Product A is used');
	});

	test('should throw an error for invalid product type', () => {
		expect(() => Factory.createProduct('InvalidType')).toThrow('Invalid Product Type');
	});
});
