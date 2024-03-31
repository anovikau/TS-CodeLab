abstract class Product {
	abstract use(): void;
}

interface AbstractFactory {
	createProduct(): Product;
}

export class ProductA extends Product {
	use(): void {
		console.log('Product A is being used.');
	}
}

export class ProductB extends Product {
	use(): void {
		console.log('Product B is being used.');
	}
}

export class ConcreteFactoryA implements AbstractFactory {
	createProduct(): Product {
		return new ProductA();
	}
}

export class ConcreteFactoryB implements AbstractFactory {
	createProduct(): Product {
		return new ProductB();
	}
}
