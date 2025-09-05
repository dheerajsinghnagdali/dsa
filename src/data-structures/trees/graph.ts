export class Graph {
  adjacencyList: Record<string, Set<string>>;
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set<string>();
    }
  }

  addEge(fVertex: string, sVertex: string) {
    if (!this.adjacencyList[fVertex]) {
      this.addVertex(fVertex);
    }
    if (!this.adjacencyList[sVertex]) {
      this.addVertex(sVertex);
    }
    this.adjacencyList[fVertex].add(sVertex);
    this.adjacencyList[sVertex].add(fVertex);
  }

  hasEdge(fVertex: string, sVertex: string) {
    return (
      this.adjacencyList[fVertex].has(sVertex) &&
      this.adjacencyList[sVertex].has(fVertex)
    );
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) {
      return;
    }
    for (const adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
  }

  removeEdge(fVertex: string, sVertex: string) {
    this.adjacencyList[fVertex].delete(sVertex);
    this.adjacencyList[sVertex].delete(fVertex);
  }

  display() {
    for (const vertex in this.adjacencyList) {
      console.log(vertex + " -> " + [...this.adjacencyList[vertex]]);
    }
  }
}
