export class Graph {
	private vertices: string[];
	private edges: Map<string, string[]>;

	constructor() {
		this.vertices = [];
		this.edges = new Map();
	}

	public addVertex(vertex: string): void {
		this.vertices.push(vertex);
		this.edges.set(vertex, []);
	}

	public addEdge(vertex1: string, vertex2: string): void {
		this.edges.get(vertex1)?.push(vertex2);
		this.edges.get(vertex2)?.push(vertex1);
	}

	public printGraph(): void {
		for (const vertex of this.vertices) {
			const edgeList = this.edges.get(vertex);

			console.log(`${vertex} -> ${edgeList?.join(' ')}`);
		}
	}
}