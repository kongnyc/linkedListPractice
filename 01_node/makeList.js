const { Node } = require('./node');

/**
 * Create a linked list with three nodes, A -> B -> C
 * There are many ways you can do this!
 */
const list = new Node('A');
// your code here
const nodeB = new Node("B")

list.next = nodeB

list.next = nodeB
nodeB = new Node ("C")


nodeB.next = new Node("C")

console.log(JSON.stringify(list));

/**
 * Create a linked list that spells your first or last name.
 * Example: K -> E -> L -> L -> Y
 * (Why are double letters tricky?)
 */
