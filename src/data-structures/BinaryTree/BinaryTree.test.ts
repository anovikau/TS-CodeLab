import { BinaryTree } from './BinaryTree';

describe('BinaryTree', () => {
	let tree: BinaryTree;

	beforeEach(() => {
		tree = new BinaryTree();

		tree.insert(10);
		tree.insert(5);
	});

	test('inserts correctly and checks the root', () => {
		expect(tree.root).not.toBeNull();
		expect(tree.root?.value).toBe(10);
	});

	test('maxDepth returns correct depth', () => {
		tree.insert(15);
		tree.insert(2);

		expect(tree.maxDepth(tree.root)).toBe(3);
	});

	test('deletes leaf node correctly', () => {
		tree.insert(15);
		tree.delete(5);

		expect(tree.root?.left).toBeNull();
	});

	test('deletes node with one child correctly', () => {
		tree.insert(15);
		tree.insert(3);
		tree.delete(5);

		expect(tree.root?.left?.value).toBe(3);
	});

	test('deletes node with two children correctly', () => {
		tree.insert(15);
		tree.insert(3);
		tree.insert(7);
		tree.delete(5);

		expect(tree.root?.left?.value).toBe(7);
	});
});
