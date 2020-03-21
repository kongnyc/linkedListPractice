const { Node } = require('../01_node/node');

const length = node => {
  let count = 0
  while(node){
    count+=1
    node=node.next
  }
  return count
};

const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
A.next = B;
B.next = C;
C.next = D;

console.log(length(A)); // expected: 3

