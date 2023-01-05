import Node from "./node.js";

export default class Tree {
  constructor(array) {
    this.root = this.buildTree(array);
  }

  buildTree(array) {
    if (array.length === 0) return null
    let sortedArray = array.sort(function (a, b) {
      return a - b
    });
    const middle = parseInt(sortedArray.length / 2);
    const root = new Node(
      sortedArray[middle],
      this.buildTree(sortedArray.slice(0, middle)),
      this.buildTree(sortedArray.slice(middle + 1))
    );

    return root
  }

}