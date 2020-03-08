// https://medium.com/@adriennetjohnson/a-walkthrough-of-dijkstras-algorithm-in-javascript-e94b74192026
class PriorityQueue {
  constructor() {
    this.PQ = [];
  }

  isEmpty() {
    return this.PQ.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue has no Element";
    } else {
      return this.PQ[0];
    }
  }

  rear() {
    if (this.isEmpty()) {
      return "Queue has no Element";
    } else {
      return this.PQ[this.PQ.length - 1];
    }
  }

  enqueue(node, weight) {
    if (this.isEmpty()) {
      this.PQ.push({ node, weight });
    } else {
      let isAdd = false;
      for (let i = 0; i < this.PQ.length; i++) {
        if (this.PQ[i].weight > weight) {
          isAdd = true;
          this.PQ.splice(i, 0, { node, weight });
          break;
        }
      }
      if (!isAdd) {
        this.PQ.push({ node, weight });
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is Empty";
    } else {
      return this.PQ.shift();
    }
  }
}

// const myPQ = new PriorityQueue();

// myPQ.enqueue("z", 26);
// myPQ.enqueue("a", 1);
// myPQ.enqueue("h", 8);
// console.log(myPQ.peek());
// myPQ.dequeue();
// console.log(myPQ.peek());
// console.log(myPQ.rear());

// console.log(JSON.stringify(myPQ, null, 1));
// console.dir(myPQ, { depth: null });

class Graph {
  constructor() {
    this.nodes = [];
    this.adjacentList = {};
  }

  addVertex(node) {
    this.nodes.push(node);
    this.adjacentList[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.adjacentList[node1].push({ node: node2, weight });
    this.adjacentList[node2].push({ node: node1, weight });
  }

  findPathWithDijkstra(startNode, endNode) {
    let times = {};
    let backTrace = {};
    let pq = new PriorityQueue();

    times[startNode] = 0;

    this.nodes.forEach(node => {
      if (node !== startNode) {
        times[node] = Infinity;
      }
    });

    pq.enqueue(startNode, 0);

    while (!pq.isEmpty()) {
      let shortestStep = pq.dequeue();
      let currentNode = shortestStep.node;
      this.adjacentList[currentNode].forEach(neighbor => {
        let time = times[currentNode] + neighbor.weight;
        if (time < times[neighbor.node]) {
          times[neighbor.node] = time;
          backTrace[neighbor.node] = currentNode;
          pq.enqueue(neighbor.node, time);
        }
      });
    }
    let path = [` ${endNode}`];
    let lastStep = endNode;
    while (lastStep !== startNode) {
      path.unshift(` ${backTrace[lastStep]}`);
      lastStep = backTrace[lastStep];
    }
    return `Path is${path} and time is ${times[endNode]}`;
  }
}

let myGraph = new Graph();
myGraph.addVertex("Fullstack");
myGraph.addVertex("Starbucks");
myGraph.addVertex("Dig Inn");
myGraph.addVertex("Dubliner");
myGraph.addVertex("Cafe Grumpy");
myGraph.addVertex("Insomnia Cookies");

myGraph.addEdge("Fullstack", "Starbucks", 6);
myGraph.addEdge("Fullstack", "Dig Inn", 7);
myGraph.addEdge("Starbucks", "Dubliner", 3);
myGraph.addEdge("Starbucks", "Insomnia Cookies", 6);
myGraph.addEdge("Dig Inn", "Dubliner", 4);
myGraph.addEdge("Dig Inn", "Cafe Grumpy", 9);
myGraph.addEdge("Dubliner", "Fullstack", 2);
myGraph.addEdge("Dubliner", "Insomnia Cookies", 7);
myGraph.addEdge("Cafe Grumpy", "Insomnia Cookies", 5);

console.log(myGraph.findPathWithDijkstra("Fullstack", "Cafe Grumpy"));
// console.log(JSON.stringify(myGraph, null, 1));
// console.dir(myGraph, { depth: null });
