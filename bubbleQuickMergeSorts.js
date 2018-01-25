// Bubble Sort: O(n^2)

function bubbleSort(array){
    var temp;
    for (var i = 0; i < array.length; i++){
        for (var j= 0; j < i; j++){
            if (array[i] < array[j]){
                temp = array[j];
                array[j]=array[i];
                array[i]=temp;
            }
        }
    }
    return array;
}

// Quick Sort: most cases O(n log n) but can be O(n^2)
function quickSort(array){
    if(array.length < 1){
        return array;
    }

    var arrLength = array.length;
    var pivotPoint = Math.floor(arrLength/2);
    var pivotVal = array[pivotPoint];
    var larger = [];
    var smaller = [];
    var same = [];
    
    for(var i = 0; i < array.length; i++){
        if(array[i] < pivotVal){
            smaller.push(array[i]);
        }
        else if (array[i]> pivotVal){
            larger.push(array[i]);
        }
        else{
            same.push(array[i]);
        }
    }
    return quickSort(smaller).concat(same, quickShort(larger));

}

//Merge Sort: O(n log n)

function mergeSort(array){ 
  if(array.length < 2){
    return array;
  }

  var midIdx = Math.floor(array.length/2);
  var frontHalf = array.slice(0, midIdx);
  var backHalf = array.slice(midIdx);
  
  return merge(mergeSort(frontHalf), mergeSort(backHalf));
}

function merge (array1, array2){
    var sortedArray = [];

    while(array1.length && array2.length){
        let minVal;
        if(array1[0] < array2[0]){
            minVal = array1.shift();
        }
        else{
            minVal = array2.shift;
        }
        sortedArray.push(minVal);
    }
    if(array1.length){
        sortedArray = sortedArray.concat(array1);
    }
    else{
        sortedArray = sortedArray.concat(array2);
    }
    return sortedArray;
}