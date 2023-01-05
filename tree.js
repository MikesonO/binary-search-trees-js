import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  // Accepts an array then turns it into a balanced binary tree
  buildTree(array) {
    if (array.length === 0) return null
    let sortedArr = array.sort(function (a, b) {
      return a - b
    });
    const middle = parseInt(sortedArr.length / 2);
    const root = new Node(
      sortedArr[middle],
      this.buildTree(sortedArr.slice(0, middle)),
      this.buildTree(sortedArr.slice(middle + 1))
    );

    return root
  }

  // Inserts inputted value from tree
  insert(value, root = this.root) {
    if (root === null) return new Node(value);
    if (value > root.value) root.right = this.insert(value, root.right)
    else root.left = this.insert(value, root.left)
    return root;
  }

  // Deletes inputted value from tree
  delete(value, root = this.root) {
    if (root === null) return root;
    if (root.value < value) root.right = this.delete(value, root.right);
    else if (root.value > value) root.left = this.delete(value, root.left);
    else {
      if (root.left === null) return root.right;
      else if (root.right === null) return root.left;
      root.value = this.smallestValue(root.right);
      console.log(root.value);
      root.right = this.delete(value, root.right);
    }

    return root;
  }

  // Returns the smallest value
  smallestValue(root) {
    let smallest = root.value;
    while (root.left != null) {
      smallest = root.left.value;
      root = root.left;
    }

    return smallest;
  }

  // Accepts a value and returns the node with the given value
  find(value, root = this.root) {
    const node = root;
    if (node === null) return null;
    if (node.value !== value) {
      return node.value < value ?
        this.find(value, node.right) :
        this.find(value, node.left);
    }

    return node;
  }

  // Displays Array in breadth-first level order
  levelOrder(arr = [], queue = [], root = this.root) {
    if (root === null) return;
    arr.push(root.value);
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
      const level = queue[0];
      queue.shift();
      this.levelOrder(arr, queue, level)
    }

    return arr;
  }

  // Traverse from the left subtree to the root then to the right subtree - returns array
  inorder(arr = [], root = this.root) {
    if (root === null) return;
    if (root.left) this.inorder(arr, root.left);
    arr.push(root.value);
    if (root.right) this.inorder(arr, root.right);
    return arr;
  }

  // Traverse from the root to the left subtree then to the right subtree - returns array
  preorder(arr = [], root = this.root) {
    if (root === null) return;
    arr.push(root.value);
    if (root.left) this.preorder(arr, root.left);
    if (root.right) this.preorder(arr, root.right);
    return arr;
  }

  // Traverse from the left subtree to the right subtree then to the root - returns array
  postorder(arr = [], root = this.root) {
    if (root === null) return;
    if (root.left) this.postorder(arr, root.left);
    if (root.right) this.postorder(arr, root.right);
    arr.push(root.value);
    return arr;
  }

// Accepts a node and returns its height
  height(root = this.root) {
    if (root === null) return 0;
    let rightHeight = this.height(root.left);
    let leftHeight = this.height(root.right);
    if (leftHeight > rightHeight) {
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
  }

  // Accepts a node and returns its depth
  depth(node, root = this.root, depth = 0) {
    if (root === null || node === null) return;
    if (node === root) return depth;
    if (root.value === node.value) return depth;
    let count = this.depth(node, root.left, depth += 1);
    if (count !== 0) return count;
    return this.depth(node, root.right, depth += 1);
  }

  // Check if tree is balanced
  isBalanced(root = this.root) {
    const leftHeight = this.height(root.left);
    const rightHeight = this.height(root.right);
    const difference = Math.abs(leftHeight - rightHeight);
    return difference < 2 ? 'true' : 'false';
  }

  // Rebalance an unbalanced tree
  rebalance(root = this.root) {
    if (this.root === null) return;
    let sortedArr = this.levelOrder([], [], root);
    sortedArr.sort((a, b) => a - b);
    return this.root = this.buildTree(sortedArr);
  }

}