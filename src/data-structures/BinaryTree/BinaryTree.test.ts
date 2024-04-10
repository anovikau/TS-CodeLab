import { BinaryTree, isValidBST, TreeNode } from './BinaryTree';

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

describe('isValidBST', () => {
	test('An empty tree is a BST', () => {
		expect(isValidBST(null)).toBe(true);
	});

	test('A single node is a BST', () => {
		const root = new TreeNode(1);

		expect(isValidBST(root)).toBe(true);
	});

	test('A complete tree that is a BST', () => {
		const root = new TreeNode(2);
		root.left = new TreeNode(1);
		root.right = new TreeNode(3);

		expect(isValidBST(root)).toBe(true);
	});

	test('Tree is not a BST because of incorrect right child', () => {
		const root = new TreeNode(1);
		root.right = new TreeNode(0);

		expect(isValidBST(root)).toBe(false);
	});

	test('Tree is not a BST because of incorrect left child', () => {
		const root = new TreeNode(3);
		root.left = new TreeNode(5);

		expect(isValidBST(root)).toBe(false);
	});
});
