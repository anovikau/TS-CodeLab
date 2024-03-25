class ListNode<T> {
	public value: T;
	public next: ListNode<T> | null = null;

	constructor(value: T) {
		this.value = value;
	}
}

export class LinkedList<T> {
	public head: ListNode<T> | null = null;

	append(value: T): void {
		const newNode = new ListNode(value);

		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = newNode;
		}
	}

	find(value: T): ListNode<T> {
		let current = this.head;

		while (current) {
			if (current.value === value) {
				return current;
			}

			current = current.next;
		}

		return null;
	}

	insertAfter(current: ListNode<T>, value: T): void {
		if (current.next === null) {
			new Error('The given previous node cannot be null');
		}

		const newNode = new ListNode(value);

		newNode.next = current.next;
		current.next = newNode;
	}

	delete(value: T): void {
		if (!this.head) {
			return;
		}

		if (this.head.value === value) {
			this.head = this.head.next;
			return;
		}

		let current = this.head;

		while (current.next) {
			if (current.next.value === value) {
				current.next = current.next.next;
				return;
			}

			current = current.next;
		}
	}

	print(): void {
		let current = this.head;

		while (current) {
			console.log(current.value);

			current = current.next;
		}
	}
}