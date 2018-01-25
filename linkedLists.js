// LinkedLists are great because you can breakup data into subsets. Data doesn't have to be stored together. Ths can help get around used memory problems. Lists can be designed to point to other linked lists in other places.

//Linked Lists are made using constructor function. Actions on linked lists are done utilizing methods or fucntions on the prototype

// Linked List constructor function
function LinkedList(){
    this.head = null;
    this.tail = null;
}

function Node(val, next, prev){
    this.val = val;
    this.next = next;
    this.prev = prev;
}

//Methods/functions on the prototype of the linked list constructor functions:

//Add a head method/function: O(1)
LinkedList.prototype.addHead = function(val){
    var newNode = new Node(val, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
};
//Add a tail method/function: O(1)
LinkedList.prototype.addTail = function(val){
    var newNode = new Node(val);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode
};
//Removing head method: O(1)
LinkedList.prototype.removeHead = function(){
    if(!this.head) return null;
    var headVal = this.head.val;
    this.head = this.head.next; //new head is next node

    if(this.head) this.head.prev = null; //as long as next node really exsisted, we can cut off the old head by setting the new head to point BACK at nothing
    else this.tail = null; //if next node wasn't there, cut the tail off too bc there is no list
    return headVal;
};
//Removing tail method: O(1)
LinkedList.prototype.removeTail = function(){
    if(!this.tail) return null;
    var tailVal = this.tail.val;

    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null;
    else this.head = null;
    return tailVal;
};
// Search a linked list: O(n)
LinkedList.prototype.search = function(val){
    if(!this.head) return null;

    var currentNode = this.head;
    while(currentNode){
        if(currentNode.val === val) return currentNode.val;
        currentNode = currentNode.next;
    }
    return null;
};
// Find the index position of a value in a linked list: O(n)
LinkedList.prototype.indexOf =  function(val){
    if(!this.head) return null;

    var indexes = [];
    var position = 0;
    var currentNode = this.head;
    while(currentNode){
        if(currentNode.val === val){
            indexes.push(position);
        }
    currentNode = currentNode.next;
    position++;
    }
    return indexes;
}