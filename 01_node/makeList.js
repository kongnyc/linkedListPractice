const { Node } = require('./node');

/**
 * Create a linked list with three nodes, A -> B -> C
 * There are many ways you can do this!
 */
const list = new Node('Y');
const list2 = new Node('A');
const list3 = new Node('N');
const list4 = new Node('G');
list.next=list2
list2.next=list3
list3.next=list4
// your code here
const nodeB = new Node("B")

list.next = nodeB

list.next = nodeB
nodeB = new Node ("C")


nodeB.next = new Node("C")


console.log(list)
console.log(JSON.stringify(list));

/**
 * Create a linked list that spells your first or last name.
 * Example: K -> E -> L -> L -> Y
 * (Why are double letters tricky?)
 */
