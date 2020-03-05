// https://www.youtube.com/watch?v=TIbUeeksXcI
// https://www.geeksforgeeks.org/breadth-first-search-or-bfs-for-a-graph/
// https://www.geeksforgeeks.org/iterative-depth-first-traversal/
class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    this.adjacentList[node1].push(node2);
    // this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }

  dfs(startNode) {
    const stack = [];
    const isVisited = {};
    stack.push(startNode);
    let currNode;
    while (stack.length !== 0) {
      currNode = stack.pop();
      if (!isVisited[currNode]) {
        isVisited[currNode] = true;
        console.log(currNode);
      }
      const adjacentNode = this.adjacentList[currNode];
      adjacentNode.map(node => {
        if (!isVisited[node]) {
          stack.push(node);
        }
      });
    }
  }

  bfs(startNode) {
    const queue = [];
    const isVisited = {};
    queue.push(startNode);
    let currNode;
    while (queue.length !== 0) {
      currNode = queue.shift();
      if (!isVisited[currNode]) {
        isVisited[currNode] = true;
        console.log(currNode);
      }
      const adjacentNode = this.adjacentList[currNode];
      adjacentNode.map(node => {
        if (!isVisited[node]) {
          queue.push(node);
        }
      });
    }
  }
}

const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdge("3", "1");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "2");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("1", "0");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("6", "5");

myGraph.addVertex(0);
myGraph.addVertex(1);
myGraph.addVertex(2);
myGraph.addVertex(3);
myGraph.addVertex(4);

// myGraph.addEdge(1, 0);
// myGraph.addEdge(0, 2);
// myGraph.addEdge(2, 1);
// myGraph.addEdge(0, 3);
// myGraph.addEdge(1, 4);
// myGraph.dfs(0);

myGraph.addEdge(0, 1);
myGraph.addEdge(0, 2);
myGraph.addEdge(1, 2);
myGraph.addEdge(2, 0);
myGraph.addEdge(2, 3);
myGraph.addEdge(3, 3);
myGraph.bfs(2);

// console.log(JSON.stringify(myGraph, null, 1));
console.dir(myGraph, { depth: null });

// myGraph.showConnections();
//Answer:
// 0-->1 2
// 1-->3 2 0
// 2-->4 1 0
// 3-->1 4
// 4-->3 2 5
// 5-->4 6
// 6-->5
