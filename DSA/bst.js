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

  deleteNode(key) {
    this.root = this.deleteNode(this.root, key);
  }

  deleteNode(node, key) {
    //node => root
    if (node == null) {
      return null;
    }

    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      }
    }
  }
}
