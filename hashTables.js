
//Creating a Hash Table
function HashTable(size){
    this.buckets = size;    //size is how many buckets table will have
    this.numBuckets = this.buckets.length; //buckets will be the array that will be of length of "size"
}

//Creating a node
fucntion HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

// ** Methods **

//Hash the key and find its bucket
HashTable.prototype.hash =  function(key){
    var total = 0;
    for(var i = 0; i < key.length; i++){
        total += key.charCadeAt(i); //charCodeAt() returns an int between 0 and 65535 representing the UTF-16 code unit at the given index
    }
    var bucket = total % this.numBuckets; //this will ensure that the bucket returned is actaully in our array
    return bucket;
};

//Insert or update if existing
HashTable.prototype.insert = function(key, value){
    var index = this.hash(key);

    if(!this.buckets[index]) this.buckets[index]= new HashNode(key, value);  //if bucket is empty, make node
    else if(this.buckets[index].key === key){
        this.buckets[index].value = value;
    }
    else{
    var currentNode = this.buckets[index];
    while(currentNode.next){
        if(currentNode.next.key === key){       //checking current.next ensures you check the last node
            currentNode.next.value = value;
        return;
        }
        currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key,value);
    }
};

//Get value
HashTable.prototype.getValue = function(key){
  var index = this.hash(key);
  if(!this.buckets[index]) return null;
  else {
    var currentNode = this.buckets[index];
    while(currentNode){
      if(currentNode.key === key) return currentNode.value
      currentNode = currentNode.next;
    }
  }
};

//Get All Values
HashTable.prototype.getAll = function(){
  var allNodes = [];
  for(var i = 0; i < this.numBuckets; i++){
    var currentNode = this.buckets[i];
    while(currentNode){
      allNodes.push(currentNode);
      currentNode = currentNode.next;
      }
    }
    return allNodes;
};

var myHT = new HashTable(30);
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Kate', 'kate@yahoo.com');
myHT.insert('Jesse', 'jessica@gmail.com');
myHT.insert('Sarah', 'sarah@outlook.com');
myHT.insert('Ed', 'ed@yahoo.com');
myHT.insert('Tom', 'tom@gmail.com');
myHT.insert('Bill', 'bill@yahoo.com');
console.log(myHT);

console.log("**********")

// testing get all
console.log(myHT.getAll());
