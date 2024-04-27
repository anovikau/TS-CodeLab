import { LinkedList, hasCycle, ListNode, reverseList, isPalindrome } from './LinkedList';

describe('LinkedList', () => {
	let list: LinkedList<number>;

	beforeEach(() => {
		list = new LinkedList<number>();
	});

	test('append adds a new element to the end of the list', () => {
		list.append(1);

		expect(list.head?.value).toBe(1);

		list.append(2);

		expect(list.head?.next?.value).toBe(2);
	});

	test('find returns the node with the specified value', () => {
		list.append(1);
		list.append(2);
		list.append(3);

		const node = list.find(2);

		expect(node?.value).toBe(2);
		expect(list.find(4)).toBeNull();
	});

	test('insertAfter inserts new element after the specified node', () => {
		list.append(1);
		list.append(3);

		const firstNode = list.find(1);

		list.insertAfter(firstNode, 2);

		expect(firstNode.next?.value).toBe(2);
		expect(firstNode.next?.next?.value).toBe(3);
	});

	test('delete the element with the specified value', () => {
		list.append(1);
		list.append(2);
		list.append(3);

		list.delete(2);

		expect(list.find(2)).toBeNull();
		expect(list.head?.value).toBe(1);
		expect(list.head?.next?.value).toBe(3);

		list.delete(1);

		expect(list.head?.value).toBe(3);
	});

	test('delete the element with the specified order from the end', () => {
		list.append(1);
		list.append(2);
		list.append(3);

		list.removeNthFromEnd(2);

		expect(list.find(2)).toBeNull();
		expect(list.head?.value).toBe(1);
		expect(list.head?.next?.value).toBe(3);

		list.delete(1);

		expect(list.head?.value).toBe(3);
	});
});

describe('hasCycle', () => {
	test('should detect a cycle in the linked list', () => {
		const node1 = new ListNode(3);
		const node2 = new ListNode(2);
		const node3 = new ListNode(0);
		const node4 = new ListNode(-4);

		node1.next = node2;
		node2.next = node3;
		node3.next = node4;
		node4.next = node2; // make a circle

		expect(hasCycle(node1)).toBe(true);
	});

	test('should detect a cycle at the first node', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);

		node1.next = node2;
		node2.next = node1;	// make a circle

		expect(hasCycle(node1)).toBe(true);
	});

	test('should return false for an empty list', () => {
		expect(hasCycle(null)).toBe(false);
	});

	test('should return false for a single node without a cycle', () => {
		const node1 = new ListNode(1);

		expect(hasCycle(node1)).toBe(false);
	});

	test('should return false for multiple nodes without a cycle', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);

		node1.next = node2;
		node2.next = node3;

		expect(hasCycle(node1)).toBe(false);
	});
});

describe('reverseList', () => {
	test('should reverse a list of multiple elements', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);

		node1.next = node2;
		node2.next = node3;

		const reversed = reverseList(node1);

		expect(reversed!.value).toBe(3);
		expect(reversed!.next!.value).toBe(2);
		expect(reversed!.next!.next!.value).toBe(1);
		expect(reversed!.next!.next!.next).toBeNull();
	});

	test('should reverse a single node list', () => {
		const node = new ListNode(1);
		const reversed = reverseList(node);

		expect(reversed!.value).toBe(1);
		expect(reversed!.next).toBeNull();
	});

	test('should handle null input as an empty list', () => {
		const reversed = reverseList(null);
		expect(reversed).toBeNull();
	});

	test('should reverse a list of two elements', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);

		node1.next = node2;

		const reversed = reverseList(node1);

		expect(reversed!.value).toBe(2);
		expect(reversed!.next!.value).toBe(1);
		expect(reversed!.next!.next).toBeNull();
	});
});

describe('isPalindrome', () => {
	test('should return true for an empty list', () => {
		expect(isPalindrome(null)).toBe(true);
	});

	test('should return true for a single element list', () => {
		const node = new ListNode(1);
		expect(isPalindrome(node)).toBe(true);
	});

	test('should return true for a palindrome list with even number of elements', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(2);
		const node4 = new ListNode(1);

		node1.next = node2;
		node2.next = node3;
		node3.next = node4;

		expect(isPalindrome(node1)).toBe(true);
	});

	test('should return true for a palindrome list with odd number of elements', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);
		const node4 = new ListNode(2);
		const node5 = new ListNode(1);

		node1.next = node2;
		node2.next = node3;
		node3.next = node4;
		node4.next = node5;

		expect(isPalindrome(node1)).toBe(true);
	});

	test('should return false for a non-palindrome list', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);

		node1.next = node2;

		expect(isPalindrome(node1)).toBe(false);
	});

	test('should return false for a longer non-palindrome list', () => {
		const node1 = new ListNode(1);
		const node2 = new ListNode(2);
		const node3 = new ListNode(3);
		const node4 = new ListNode(4);

		node1.next = node2;
		node2.next = node3;
		node3.next = node4;

		expect(isPalindrome(node1)).toBe(false);
	});
});
