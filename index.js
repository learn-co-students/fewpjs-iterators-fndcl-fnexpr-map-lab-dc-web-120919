const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = function(input){
  //maps tutorials array 
  let outputArray= tutorials.map(tutorial => {

    // makes new array of a single title 
    let title = tutorial.split(' ');

    //makes new array of the words in the single title
    //changes each word to uppercase 
    let capitalTitle = title.map(word =>  word.charAt(0).toUpperCase() + word.slice(1));
    //joins all the words again, now uppercase 
    let titleJoin = capitalTitle.join(' ');
    
    //returns this newly-formed title to map to original tutorials array
    return titleJoin;
  });

  //returns the newly formed array 
  return outputArray;
}

let finalTitles = titleCased(tutorials);
console.log(finalTitles);