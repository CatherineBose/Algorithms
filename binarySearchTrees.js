//BST Constructor function
function BST(value){
    this.value = value;
    this.left = left;
    this.right = right;
}

//** Methods **

//Insert a new node
BST.prototype.insert = function(value){
    if(value<=this.value){
        if(!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    if(value >= this.value){
        if(!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
}

//Check to see if a value is contained in the BST
BST.prototype.contains = function(value){
    if(this.value === value) return true;   //checks the root node & each node as recursed
    if(value < this.value){                 //checks the left
        if(!this.left) return false;
        else return this.left.contains(value); //recurse checking lefts until found
    }
    if(value > this.value){                 //checks the left
        if(!this.right) return false;
        else return this.right.contains(value);
    }
};

// Traversal Methods

// Depth First Traversal travels all they way to the bottom
// 'in-order' will travel down to left-most child & print, back to parent & print, right-most & print
// 'pre-order' will print all avlues down left side, then right children of left right, then down left children of right side, then right children of right side
// 'post order' will print all of left children, then all right children, then parent

BST.prototype.depthFirst = function(iteratorFunc, order){
    if(order === "pre-order") iteratorFunc(this.value);
    if(this.left) this.left.depthFirst(iteratorFunc, order);
    if(order === "in-order") iteratorFunc(this.value);
    if(this.right) this.right.depthFirst(iteratorFunc, order);
    if(order === "pre-order") iteratorFunc(this.value);
}

//Breadth First Traversal moves aross the tree in rows rather than down its children. Utilize a queue.
BST.prototype.breadthFirstTraversal = function(iteratorFunc) {
    var queue = [];
    while(queue.length){
        var treeNode = queue.shift();       //pops the node out of the queue
        iteratorFunc(treeNode);             //prints its value
        if(treeNode.left)queue.push(treeNode.left);
        if(treeNode.right)queue.push(treeNode.right);
    }
}

//Iterator Function will take in a value and print it
function log(node){
    console.log(node.value);
}

//Get a BST's minimum value
BST.prototype.getMinVal = function(value= this.value){
    if(this.left) return this.left.getMinVal();  //as long as there are lefts, recurse left
    else return this.value;
}

//Get a BST's maximum value

BST.prototype.getMaxValue = function (value = this.value){
    if(this.right) return this.right.getMaxValue();
    else return this.value;
}

var bst = new BST(50);
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

console.log("Min:", bst.getMinValue());
console.log("Max:", bst.getMaxValue());