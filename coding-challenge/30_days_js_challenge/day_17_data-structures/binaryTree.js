class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertNode(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.insert(this.root, newNode);
    }
  }

  insert(node, newNode) {
    if (node.value > newNode.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insert(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insert(node.right, newNode);
      }
    }
  }

  remove(value) {
    if (!this.root) return null;

    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node.value > value) {
      this.removeNode(node.left, value);
    } else if (node.value < value) {
      this.removeNode(node.right, value);
    } else if (node.value === value) {
      if (!node.left && node.right) {
        return null;
      } else if (!node.left) {
        node = node.right;
      } else if (!node.right) {
        node = node.left;
      } else {
        let tempNode = this.findMinLeftNode(node.right);
        node.value = tempNode.value;
        node.right = this.removeNode(node.right, tempNode.value);
      }
    }
    return node;
  }

  findMinLeftNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  inOrderTraversal() {
    const result = [];
    this.traverse(this.root, result);
    return result;
  }

  traverse(node,result) {
    if (node) {
      this.traverse(node.left, result);
      result.push(node.value);
      this.traverse(node.right, result);
    }
  }
}

function inOrderRecursive(root) {
  if (root === null) return [];

  const leftValues = inOrderRecursive(root.left);
  const rightValues = inOrderRecursive(root.right);

  return [...leftValues, root.value, ...rightValues];
}
const bst = new BinaryTree();

bst.insertNode(20);
bst.insertNode(11);
bst.insertNode(16);
bst.insertNode(6);
bst.insertNode(23);
bst.insertNode(25);
bst.insertNode(27);
// console.log(inOrderRecursive(bst.root));
// console.log(bst.root)
console.log(bst.inOrderTraversal());
