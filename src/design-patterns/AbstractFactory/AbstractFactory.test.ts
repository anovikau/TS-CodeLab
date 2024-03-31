import { ConcreteFactoryA, ConcreteFactoryB, ProductA, ProductB } from './AbstractFactory';

describe('Abstract Factory: ', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	test('ConcreteFactoryA should create a ProductA', () => {
		const factory = new ConcreteFactoryA();
		const product = factory.createProduct();

		expect(product).toBeInstanceOf(ProductA);
	});

	test('ConcreteFactoryB should create a ProductB', () => {
		const factory = new ConcreteFactoryB();
		const product = factory.createProduct();

		expect(product).toBeInstanceOf(ProductB);
	});

	test('ProductA should use method correctly', () => {
		const factory = new ConcreteFactoryA();
		const product = factory.createProduct();

		console.log = jest.fn();
		product.use();

		expect(console.log).toHaveBeenCalledWith('Product A is being used.');
	});

	test('ProductB should use method correctly', () => {
		const factory = new ConcreteFactoryB();
		const product = factory.createProduct();

		console.log = jest.fn();
		product.use();

		expect(console.log).toHaveBeenCalledWith('Product B is being used.');
	});
});
