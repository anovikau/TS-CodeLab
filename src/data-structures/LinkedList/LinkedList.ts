export class ListNode<T> {
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

	removeNthFromEnd(n: number): ListNode<T> | null {
		const dummy = new ListNode(null);

		dummy.next = this.head;

		let fast = dummy;
		let slow = dummy;

		for (let i = 0; i <= n; i++) {
			fast = fast.next;
		}

		while (fast != null) {
			slow = slow.next;
			fast = fast.next;
		}

		slow.next = slow.next.next;

		return dummy.next;
	}

	print(): void {
		let current = this.head;

		while (current) {
			console.log(current.value);

			current = current.next;
		}
	}
}

export function hasCycle<T>(head: ListNode<T> | null): boolean {
	if (head === null || head.next === null) return false;

	let slow: ListNode<T> | null = head;
	let fast: ListNode<T> | null = head.next;

	while (slow !== fast) {

		if (fast === null || fast.next === null) {
				return false;
		}

		slow = slow!.next;
		fast = fast.next.next;
	}

	return true;
}

export function reverseList<T>(head: ListNode<T> | null): ListNode<T> | null {
	let prev: ListNode<T> | null = null;
	let current = head;

	while(current !== null) {
		const next = current.next;

		current.next = prev;
		prev = current;
		current = next;
	}

	return prev;
}

export function isPalindrome<T>(head: ListNode<T> | null): boolean {
	if (head === null) return true;

	let slow: ListNode<T> | null = head;
	let fast: ListNode<T> | null = head;

	while (fast !== null && fast.next !== null) {
		slow = slow!.next;
		fast = fast.next.next;
	}

	let prev: ListNode<T> | null = null;

	while (slow !== null) {
		const next = slow.next;

		slow.next = prev;
		prev = slow;
		slow = next;
	}

	let left: ListNode<T> | null = head;
	let right: ListNode<T> | null = prev;

	while (right !== null) {
		if (left!.value !== right.value) return false;

		left = left!.next;
		right = right.next;
	}

	return true;
}
