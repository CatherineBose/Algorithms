# Linked Lists 
A linked list ia a list of elements called "nodes" that are connected together or "linked" in a single-file line. There are two types: Single Linked or Double Linked
Single Linked Lists:
    Each node only has a reference to the next node.
Double Linked Lists:
    Each node has a reference to both the next node that the previous node.

A head node and a tail node are required for the list to function using a head pointer and a tail pointer.

Common operations are adding/removing a node to the head or tail and adding/removing a node in the middle. Search the linked list to find a piece of data.

Each node contains:
    1. value
    2. pointer to next (single)
    3. pointer to previous (double)

### Constructor Functions 
A function that creates an object class and allowes you to create multiple instances of that class easily. All objects will have the same properties and the same functionality. Constructor functions have a Capital name which distinguises them as CF and not just regualr functions. They take in paramiters ().

Ex: Constructor function to create a lot of user objects

```javascript
function User(firstName, lastName, age, gender){
    this.firstName = firstNameame;
    this.lastName - lastName;
    this.age = age;
    this.gender = gender;
}

var user1 = new User('John', 'Smith', '26', 'male');
var user200 = new User ('Jill', 'Robinson', '25', 'male');
```

user200 will return an object with the paramiters typed 

### Prototype Object
Simply an object that multiple objects can refer to to get any information or functionality that they need. Constructor functions can have prototypes.

Ex: We can add properties to the the prototype that all of the users instanaces like user1 and user200 will have access to and be able to use.

``` javascript
User.prototype.emailDomain = '@facebook.com';  //create the prototype
```

This will show under the _proto__: Object section show that the object has access to this newly created prototype

user200.emailDomain will show it by itself

To set it, create a method:
```javascript
User.protoype.getEmailAddress = function (){
    return this.firstName + this.lastName + this.emailDomain;
    }

//Invoke by:
user200.getEmailAddress();

///Returns "JillRobinson@facebook.com"
```

# Binary Search Trees
BSTs are non-linear data structure. Trees are mainly used to represent data containing hierarchical relationship between elements comprised of nodes. Every node or vertex called a "root" that has either no child node (min), or one child node or two child nodes (max). Child node in a binary tree on the left is termed as ‘left child node’ and node in the right is termed as the ‘right child node’. 

Values in a tree are placed so that smaller values are to the left of the parent and larger are to the right.

BST's are recursive by nature.

### Types of Binary Trees:
* **full binary tree:** called as proper binary tree or 2-tree is a tree in which all the node other than the leaves has exact two children.

* **complete binary tree:** every level, except possibly the last, has to be completely filled and all nodes are as far left as possible.

* **extended binary tree:** new nodes are added to its leaf nodes and to the nodes that have only one child. These new nodes are added in such a way that all the nodes in the resultant tree have either zero or two children. It is also called 2 – tree.

* **threaded binary tree:** tree which is represented using pointers the empty sub trees are set to NULL, i.e. ‘left’ pointer of the node whose left child is empty sub tree is normally set to NULL. These large numbers of pointer sets are used in different ways.


# Hash Table/Object/Dictionary
A hash table is a data structure that is used to store keys/value pairs. It uses a hash function to compute an index into an array in which an element will be inserted or searched. Hash tables are very powerful data structures because they provide constant runtime (most of the time) for both insertion and retrival/lookup O(1). Used because of this fast runtime. 

Example:
* In universities, each student is assigned a unique roll number that can be used to retrieve information about them.

* In libraries, each book is assigned a unique number that can be used to determine information about the book, such as its exact position in the library or the users it has been issued to etc.

The term "Hash" is used because keys are large keys are converted into small keys by using hash functions. Hash functions turn key data (such as strings) into converted key which are numbers that have an index value. When we want to retrive that key:value pair in the future, we can jump directly to its position.

Example: 
| String        | Hash function                               | Index   |
| ------------- |:-------------:                              | -----:  |
| abcdef        | (971 + 982 + 993 + 1004 + 1015 + 1026)%2069 |   38    |
| bcdefa        | (981 + 992 + 1003 + 1014 + 1025 + 976)%2069 |   23    |
| cdefab        | (991 + 1002 + 1013 + 1024 + 975 + 986)%2069 |   14    |
| defabc        | (1001 + 1012 + 1023 + 974 + 985 + 996)%2069 |   11    |

If we want to see if our hash table contains "cdefab", it is put into the hash function which returns 14. We go to array[14] and see if it is a match. 

In large hash tables, it is possible for more than 1 key to have the same hash value or a collision. This is solved by using a "next position" pointer. Inserting will move to the "next" position and try to insert. If full, it will move to the "next" again. Retriving will look at the first position, if !match, it will move to the "next" position and check until found or false. This can affect runtime but not much.

Example: 

__String__                __Hash function__                 __Index__  __Next__
abcdef       (971 + 982 + 993 + 1004 + 1015 + 1026)%2069       38         68
empty                           empty                          68         98

| String        | Hash function                               | Index   | Next |
| ------------- |:-------------:                              | -----:  |-----:|
| abcdef        | (971 + 982 + 993 + 1004 + 1015 + 1026)%2069 |   38    |   68 |
| empty         | empty                                       |   68    |   98 |


*Well designed hash tables have hash functions that reduce the chances that keys will hash to the same value.