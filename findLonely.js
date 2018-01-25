// Given an array of numbers where all numbers will be matching sets except for 1, find and return the loney number
//Array will always a an odd length if every value is a matching pair accept 1. Can have negative values.

//Solution 1: Looking left

function findLonely1(array, left = 0, right = array.length-1){
    let mid = Math.ceil((left + right)/2); //sets mid in section being checked

    if (right - left <= 3){         //checks for more than 3 values in between left and right
        if(array[mid]!= array[mid-1]){  //if not, looks to the left and right of mid to find lonely
            return array[left];
        }
        else{
            return array[right];
        }
    }
    else if(array[mid]!= array[mid-1]){  // looks left, if !match then mid becomes the new left value
        return findLonely1(array, mid, right);
    }
    else{
        return findLonely1(array, left, mid); //else the mid becomes the new right value
    }
}

//Solution 2: looking for pairs then using the length on each side to determine which side has an odd number

function findLonely(array){
  var left = array.slice(0, Math.floor(array.length/2));
  var right = array.slice(Math.floor(array.length/2), array.length);
  if(array.length===1){
    return array[0];
  }
  if(left[left.length-1]!== right[0]){
    if(left.length % 2 !== 0){
      return findLonely(left);
    }
    else{
      return findLonely(right);
    }
  }
  else{
    right = array.slice(Math.ceil(array.length/2), array.length);
    left = array.slice(0, Math.ceil(array.length/2));
    if(left.length %2 !== 0){
      return findLonely(left);
    }
    else{
      return findLonely(right);
    }
  }
}