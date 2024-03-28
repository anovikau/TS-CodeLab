import { Graph } from './Graph';

const A = 'A';
const B = 'B';

describe('Graph', () => {
	let graph: Graph;

	beforeEach(() => {
		graph = new Graph();
	});

	test('adds vertices correctly', () => {
		graph.addVertex(A);

		expect(graph['vertices']).toContain(A);
	});

	test('adds edges correctly', () => {
		graph.addVertex(A);
		graph.addVertex(B);
		graph.addEdge(A, B);

		expect(graph['edges'].get(A)).toContain(B);
		expect(graph['edges'].get(B)).toContain(A);
	});

	test('prints the graph correctly', () => {
		console.log = jest.fn();

		graph.addVertex(A);
		graph.addVertex(B);
		graph.addEdge(A, B);

		graph.printGraph();

		expect(console.log).toHaveBeenCalledWith('A -> B');
		expect(console.log).toHaveBeenCalledWith('B -> A');
	});
});