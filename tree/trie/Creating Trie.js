class Node {
  constructor() {
    this.parent = null;
    this.char = null;
    this.children = {};
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  lookup(str) {
    let currNode = this.root;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let node = currNode.children[char];
      if (!node) return false;
      currNode = node;
    }
    return currNode;
  }

  search(str) {
    const currNode = this.lookup(str);
    if (currNode) {
      return currNode.isWord;
    }
    return false;
  }

  insert(str) {
    let currNode = this.root;
    let parent = null;
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let node = currNode.children[char];
      if (!node) {
        node = new Node();
        currNode.children[char] = node;
      }
      parent = currNode;
      currNode = node;
      currNode.parent = parent;
      currNode.char = char;
    }
    currNode.isWord = true;
  }

  delete(str) {
    let currNode = this.lookup(str);
    if (currNode.isWord) {
      while (currNode.parent) {
        // this word is prefix of some other word than set isWord to false
        // delete(home)
        // parent   -> home
        // children -> homework
        if (Object.keys(currNode.children).length > 0) {
          currNode.isWord = false;
          break;
        }
        // delete char from children only if it is not prefix
        else {
          delete currNode.parent.children[currNode.char];
        }
        // part of the word is complete word than break
        // delete(together)
        // parent   -> to
        // children -> together
        if (currNode.parent.isWord) {
          break;
        }

        currNode = currNode.parent;
      }
    }
    return true;
  }
}

const myTrie = new Trie();
myTrie.insert("also");
myTrie.insert("ally");
// myTrie.insert("also-to");
// myTrie.insert("al");
myTrie.delete("also");
// myTrie.delete("ally");
console.log(myTrie.search("also"));
console.log(myTrie.search("ally"));
// console.log(myTrie.search("also-to"));
// console.log(myTrie.search("al"));
// console.log(JSON.stringify(myTrie, null, 1));
console.dir(myTrie, { depth: null });
