class bstNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;

    console.log(this.root);
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
}
