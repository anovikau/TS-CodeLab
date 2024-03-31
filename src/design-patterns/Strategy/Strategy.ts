interface PaymentStrategy {
	pay(amount: number): void;
}

export class CreditCardPayment implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`Paid ${amount} using Credit Card`);
	}
}

export class PayPalPayment implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`Paid ${amount} using PayPal Payment`);
	}
}

export class BitcoinPayment implements PaymentStrategy {
	pay(amount: number): void {
		console.log(`Paid ${amount} using Bitcoin Payment`);
	}
}

export class PaymentContext {
	private strategy: PaymentStrategy;

	constructor(strategy: PaymentStrategy) {
		this.strategy = strategy;
	}

	public setStrategy(strategy: PaymentStrategy): void {
		this.strategy = strategy;
	}
	public executePayment(amount: number): void {
		this.strategy.pay(amount);
	}
}
