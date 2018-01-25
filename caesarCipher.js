// Caesar's Cipher
// Shift every letter in a given string by a value passed in. Ex: if "ab" is our string and 2 is the value = "cd". If you end up at the end of the alphabet, it must loop back to the begining. The function will nee to handle both positive and negative numbers.

function caesarCipher(str, val){
  val = val % 26; //this will keep -val positive and keep vals larger than 26 from looping too many times
  let string = str.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for(var i = 0; i < string.length; i++){
    let currentletter = string[i];
    if(currentletter===" "){
      result+= currentletter;
      continue;
    }
    let curIndex = alphabet.indexOf(currentletter);
    let newIndex = curIndex + val;
    if(newIndex > 25){
      newIndex = newIndex - 26;
    }
    if (newIndex < 0){
      newIndex = 26 + newIndex;
    }
    if(str[i]=== str[i].toUpperCase()){  // checks to see if letter in origional string was upper case
    result += alphabet[newIndex].toUpperCase();  
    }
    else{
      result += alphabet[newIndex];
    }
  }
  return result;
}

caesarCipher("Javascript", -900);