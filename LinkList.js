// What is a linked list
/* 
T or F
1. Linked list have index numbers, like arrays? FALSE 
    Do not have index numbers
    object that is a node. value, next . --> points to the next node. 
    only knows the necxt node. 

2. linked Listrs have a fixed capacity.FALSE
    does not have a fixed capacity, mainly all nodes and can be added to it. 

3. A linked list is of a series of nodes. TRUE

4. A node stoes data and a reference to the node.  true
****************
why are they important? can be used everday and is needed for a job.

which of these data structures are usually made form linked list
-- stacked stata structures is made from linked list

---array is not a linked list

---Queues, first in last out, ---> yes 

--- Objedcts(dictionaraies, hahsmaps) -- > yes 

putting things in the same array/same index

ARRAYS VS LINKED LIST
********************

Which DS is better for the situation

1. Accessing the nth item in the item. Array 

2.add a new item to the beginning or end , linked list

3. add or remove a new item from the middle of the collection --- linkedlist
    keep treck of what comes between C, before and foward. constant time operation. 

4. searching for a value in a collection, linked list/ abotu the same


*/

//linked list class. 
// Node class.  linkedlist is a collection of nodes


class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}