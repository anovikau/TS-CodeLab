import { CreditCardPayment, PayPalPayment, BitcoinPayment, PaymentContext } from './Strategy';

describe('Strategy: ', () => {
	beforeEach(() => {
		console.log = jest.fn();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});


	test('CreditCardPayment strategy should works correctly', () => {
		const creditCardPayment = new CreditCardPayment();

		creditCardPayment.pay(100);

		expect(console.log).toHaveBeenCalledWith('Paid 100 using Credit Card');
	});

	test('PayPalPayment strategy should works correctly', () => {
		const payPalPayment = new PayPalPayment();

		payPalPayment.pay(50);

		expect(console.log).toHaveBeenCalledWith('Paid 50 using PayPal Payment');
	});

	test('BitcoinPayment strategy should works correctly', () => {
		const bitcoinPayment = new BitcoinPayment();

		bitcoinPayment.pay(30);

		expect(console.log).toHaveBeenCalledWith('Paid 30 using Bitcoin Payment');
	});

	test('PaymentContext should uses the set strategy correctly', () => {
		const paymentContext = new PaymentContext(new CreditCardPayment());
		paymentContext.executePayment(100);
		expect(console.log).toHaveBeenCalledWith('Paid 100 using Credit Card');

		paymentContext.setStrategy(new PayPalPayment());
		paymentContext.executePayment(50);
		expect(console.log).toHaveBeenCalledWith('Paid 50 using PayPal Payment');

		paymentContext.setStrategy(new BitcoinPayment());
		paymentContext.executePayment(30);
		expect(console.log).toHaveBeenCalledWith('Paid 30 using Bitcoin Payment');
	});
});
