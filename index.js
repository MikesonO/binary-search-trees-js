import Tree from './tree.js';
import drawTree from './prettyPrint.js'

let arr = [4,1,3,6];
const tree = new Tree(arr);

// Test

console.log(tree);
console.log(drawTree(tree.root));

