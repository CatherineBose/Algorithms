// Harmless Ransome Note utilizes Object/Hash Table. It takes in a note and some magazine text then determines if you can make the note from the text provided (returns true). If not, returns false.

// Assumptions: no punctuation/special characters/numbers. all lower case values.

function harmlessRansomNote(note, magText){
  let noteArr = note.split(" ");
  let magArr = magText.split(" ")
  let magObj = {};
  
  magArr.forEach(word =>{
    if (!magObj[word]) {
      magObj[word] = 0;
      magObj[word]++;
    }
  });
 
  let noteIsPossible = true;
  noteArr.forEach(word => {
    if(magObj[word]){
      magObj[word]--;
      if(magObj[word]< 0){
        noteIsPossible = false;
      }
    }
    else noteIsPossible = false;
  });
  return noteIsPossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

//Time Complexity O(n + m) or O(n) plus n additional memory