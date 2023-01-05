import Tree from './tree.js';
import drawTree from './prettyPrint.js'

// Test
const tree = new Tree([4,1,3,7,6]);
drawTree(tree.root);
/* 
Output: 
│   ┌── 7
│   │   └── 6
└── 4
    └── 3
        └── 1
*/

tree.insert(5);
/*
Output: 
 │   ┌── 7
 │   │   └── 6
 │   │       └── 5
 └── 4
     └── 3
         └── 1
*/

tree.insert(9); // Inserts 9 to tree
/* 
Output: 
 │       ┌── 9
 │   ┌── 7
 │   │   └── 6
 │   │       └── 5
 └── 4
     └── 3
         └── 1
*/

tree.delete(1); // Deletes 1 from tree
/*
Output:
│       ┌── 9
│   ┌── 7
│   │   └── 6
│   │       └── 5
└── 4
    └── 3
*/


console.log(tree.find(9)); // Node { value: 9, left: null, right: null }
console.log(tree.levelOrder()); // [ 4, 3, 7, 6, 9, 5 ]
console.log(`inorder: [${tree.inorder()}]`); // inorder: [3,4,5,6,7,9]
console.log(`preorder: [${tree.preorder()}]`); // preorder: [4,3,7,6,5,9]
console.log(`postorder: [${tree.postorder()}]`); // postorder: [3,5,6,9,7,4]
console.log(`Height: ${tree.height(tree.find(6))}`); // Height: 2
console.log(`Depth: ${tree.depth(tree.find(3))}`); // Depth: 1
console.log(`Balanced: ${tree.isBalanced()}`); // False
tree.rebalance();
console.log(`Balanced: ${tree.isBalanced()}`); // True
