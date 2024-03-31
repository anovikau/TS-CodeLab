abstract class AbstractProduct {
	abstract use(): void;
}

export class ConcreteProductA extends AbstractProduct {
	public use(): void {
		console.log('Product A is used');
	}
}

export class ConcreteProductB extends AbstractProduct {
	public use(): void {
		console.log('Product B is used');
	}
}

export class Factory {
	public static createProduct(type: string): AbstractProduct {
		switch (type) {
			case 'A':
				return new ConcreteProductA();
			case 'B':
				return new ConcreteProductB();
			default:
				throw new Error('Invalid Product Type');
		}
	}
}
