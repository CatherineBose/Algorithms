# Big O notation:

### Contstant runtime = O(1);
As the imput size increases the time it takes to run never changes.
Example: log the first 2 variables in a array

```javascript
function logTwo(array){
  for(var i = 0; i == 2; i++){
    console.log(array[i]);
  }
}
log([1, 2, 3, 4]);
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
```

### Linear runtime = O(n); 
As the inout increases, the runtime increases proportionatly

Example: Log all values in an array

```javascript
function logAll(array){
  for(var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

logAll([1, 2, 3, 4, 5]);
logAll([1, 2, 3, 4, 5, 6]);
logAll([1, 2, 3, 4, 5, 6, 7]);
```

### Exponential runtime = 0(n^2) (pronounced "O of n squared");
For each element added to the input, the runtime makes an exponential jump. Like finding all possible combinations of the letters for a password of n length. This is one of the worse runtimes. This is common in nested ```for``` loops. 

Example: finding all possible combinations when given a set of values

```javascript
function findAllCombos(array){
  for (var i = 0; i < array.length; i++){
    for (var j=0; j < array.length; j++){
      console.log(array[i] + array[j]);
    }
  }
}

findAllCombos(['A', 'B', 'C']);  // 9 pairs logged out
findAllCombos(['A', 'B', 'C', 'D']);  // 16 pairs logged out
findAllCombos(['A', 'B', 'C', 'D', 'E']);  // 25 pairs logged out
```

### Logarithmic runtime (known as "log time") = O(log n) or O(n);
Regardless of the numbe of elements, the search field is narrowed by 1/2 after each iteration by determining if the value you are looking for is larger/after or smaller/before than the value you are currently looking for. This requires a sorted data set.

Example: binary search which looks for a value in a sorted array, linked list, tree, etc.

```javascript
function binarySearch(array, key){
 var low = 0;
 var high = array.length -1;
 var mid; 
 while(low <= high){
   mid = Math.floor((low + high) /2);
   if( array[mid] < key){
     low = mid + 1;
   }
  else if(array[mid] > key){
    high = mid - 1;
    }
  else{
    return mid;
    }
  }
  return false;
}
```

### Factorial runtime = O(n!);

**Worse runtime possible!** 

Example: traveling sales person who wants to travel to n cities  while traveling the minimum possible distance. There are 120 possible permutations for a list of 5 cities (5 * 4 * 3 * 2 * 1 = 120). 6 cities = 720, 7 cities = 5040 and so on.

```javascript
function factorial(num, sum=1){
   while(num > 0){
    sum = num * sum;
    return factorial(num-1, sum);
   }
  return sum;
}
```