// Determine if a string is a palindrome.

//Basic function assuming there are no special characters or spaces.
function isPal(str){
  let front = 0;
  let back = str.length -1;
  while(front < back){
    if(str[front]=== str[back]){
      front ++;
      back --;
    }
    else{
      return false;
    }
  }
  return true;
}

isPal("tacocat");

// Determine if a string is a palindrome.

// Function assuming there are no special characters or spaces.
function isPal(str){
  let string=str.toLowerCase();
  let front = 0;
  let back = string.length -1;
  while(front < back){
    if(string[front]=== string[back]){
      front ++;
      back --;
    }
    else{
      return false;
    }
  }
  return true;
}

isPal("madam");

//More complex assuming there are capitals and special characters that need to be removed

function complexIsPal(str){
  let string = str.toLowerCase();
  let charactersArr = string.split("");
  let validCharacters = "abcdefghijklmnopqrstuvwxyz".split("");
  let lettersArr=[];
  
  charactersArr.forEach( char => {
    if(validCharacters.indexOf(char) > -1){      //indexOf is a method returns the index of the char passed in
      lettersArr.push(char);    // creating an array with no special characters or spaces
    }
  });
  return isPal(lettersArr.join(""));
}

complexIsPal("Madam I'm Adam");
