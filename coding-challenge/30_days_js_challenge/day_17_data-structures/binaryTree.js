class TreeNode {
    constructor(value,left=null,right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertion(value) {
        const newNode = new TreeNode(value)
        if(!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root,newNode);
        }
    }

    insertNode(node,newNode) {
        if(node.value > newNode.value) {
            if(!node.left) {
                node.left = newNode;
            }else {
            this.insertNode(node.left,newNode);
            }
        } else {
            if(!node.right) {
                node.right = newNode;
            } else {
             this.insertNode(node.right,newNode);
            }
        }
    }

    inOrderTraversal () {
        const result = [];
        this.inOrder(this.root,result);
        return result;
    }

    inOrder(node,result) {
        if(node !== null) {          
            this.inOrder(node.left,result);
            result.push(node.value);
            this.inOrder(node.right,result);
          
        }
    }

   
}
function inOrderRecursive (root) {
    if(root === null) return [];

    const leftValues = inOrderRecursive(root.left);
    const rightValues = inOrderRecursive(root.right);

    return [...leftValues,root.value,...rightValues];
} 
const bst = new BinaryTree();

bst.insertion(20);
bst.insertion(11);
bst.insertion(16);
bst.insertion(6);
bst.insertion(23);
bst.insertion(25);
bst.insertion(27);
// console.log(inOrderRecursive(bst.root));
// console.log(bst.root)
console.log(bst.inOrderTraversal());