interface CustomIterator<T> {
	current(): T;
	next(): T;
	key(): number;
	valid(): boolean;
	rewind(): void;
}

interface IterableCollection<T> {
	createIterator(): CustomIterator<T>;
}

export class NumberArrayIterator implements CustomIterator<number> {
	private collection: number[] = [];
	private position: number = 0;

	constructor(collection: number[]) {
		this.collection = collection;
	}

	public current(): number {
		return this.collection[this.position];
	}

	public next(): number | undefined {
		if (!this.valid()) {
			return undefined;
		}

		return this.collection[this.position++];
	}

	public key(): number {
		return this.position;
	}

	public valid(): boolean {
		return this.position < this.collection.length;
	}

	public rewind(): void {
		this.position = 0;
	}
}

export class NumberArrayCollection implements IterableCollection<number> {
	private items: number[] = [];

	public addItem(item: number): void {
		this.items.push(item);
	}

	public createIterator(): CustomIterator<number> {
		return new NumberArrayIterator(this.items);
	}
}
