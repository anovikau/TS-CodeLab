class TreeNode {
	public value: number;
	public left: TreeNode | null = null;
	public right: TreeNode | null = null;

	constructor(value: number) {
		this.value = value;
	}
}

export class BinaryTree {
	public root: TreeNode | null = null;

	public insert(value: number): void {
		const newNode = new TreeNode(value);

		if (this.root === null) {
			this.root = newNode;
		} else {
			this.insertNode(this.root, newNode);
		}
	}

	public maxDepth(node: TreeNode): number {
		if (node === null) {
			return 0;
		}

		const lDepth = this.maxDepth(node.left);
		const rDepth = this.maxDepth(node.right);

		return Math.max(lDepth, rDepth) + 1;
	}

	public delete(value: number): void {
		this.root = this.deleteNode(this.root, value);
	}

	private deleteNode(node: TreeNode | null, value: number): TreeNode | null {
		if (node === null) {
			return null;
		}

		if (value < node.value) {
			node.left = this.deleteNode(node.left, value);

			return node;
		} else if (value > node.value) {
			node.right = this.deleteNode(node.right, value);

			return node;
		} else {
			if (node.left === null) {
				return node.right;
			} else if (node.right === null) {
				return node.left;
			}

			node.value = this.getMinValue(node.right);
			node.right = this.deleteNode(node.right, node.value);
		}

		return node;
	}

	private getMinValue(node: TreeNode): number {
		let minValue = node.value;

		while (node.left !== null) {
			minValue = node.left.value;

			node = node.left;
		}

		return minValue;
	}

	private insertNode(node: TreeNode, newNode: TreeNode): void {
		if (newNode.value < node.value) {
			if (node.left === null) {
				node.left = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		} else {
			if (node.right === null) {
				node.right = newNode;
			} else {
				this.insertNode(node.left, newNode);
			}
		}
	}
}
