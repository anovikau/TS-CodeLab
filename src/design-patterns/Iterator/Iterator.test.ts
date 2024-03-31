import { NumberArrayIterator, NumberArrayCollection } from './Iterator';

const elements = [1, 2, 3];

describe('NumberArrayIterator', () => {
	let iterator: NumberArrayIterator;

	beforeEach(() => {
		iterator = new NumberArrayIterator(elements);
	});

	test('should returns the current element without advancing', () => {
		expect(iterator.current()).toBe(1);

		iterator.next();

		expect(iterator.current()).toBe(2);
	});

	test('should advances the iterator and returns the next element', () => {
		expect(iterator.next()).toBe(1);
		expect(iterator.next()).toBe(2);
		expect(iterator.next()).toBe(3);
		expect(iterator.next()).toBeUndefined();
	});

	test('should returns the current position', () => {
		iterator.next();

		expect(iterator.key()).toBe(1);
	});

	test('should checks if the current position is valid', () => {
		iterator.next();
		iterator.next();
		iterator.next();

		expect(iterator.valid()).toBe(false);
	});

	test('should resets the iterator to the first element', () => {
		iterator.next();
		iterator.rewind();

		expect(iterator.current()).toBe(1);
	});
});

describe('NumberArrayCollection', () => {
	test('should returns an iterator for the collection', () => {
		const collection = new NumberArrayCollection();
		const iterator = collection.createIterator();

		collection.addItem(1);
		collection.addItem(2);
		collection.addItem(3);

		expect(iterator.next()).toBe(1);
		expect(iterator.next()).toBe(2);
		expect(iterator.next()).toBe(3);
		expect(iterator.next()).toBeUndefined();
	});
});
