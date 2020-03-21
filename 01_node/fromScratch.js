/**
 * Make a linked list that spells the letters
 * of your favorite food.
 *
 * Create your own Node class from scratch to do this!
 * DO NOT import the Node class from ./node.js
 */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
}

const favoriteFood = ("rice")
const letter = new Node("R")    
const letter2 = new Node("I")
const letter3 = new Node("C")
const letter4 = new Node("E")


letter.next = letter2
letter2.next = letter3
letter3.next = letter4 
letter4.next = null
console.log(letter)