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


const titleCased = () => {
  return tutorials.map(tutorial => {
    let words = tutorial.split(' ');
    let capWord = words.map(word => word.charAt(0).toUpperCase() + word.slice(1))
    let capSentence = capWord.join(" ")
    return capSentence
  })
};

// // return tutorials.map(tutorial => function(){
// //   tutorial.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(0)).join(" ");

// function toTitleCase(string){
//   let words = string.split(' ');
//   let capitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//   return capitalizeWords;
// }
// const titleCased = () => {
//   return tutorials.map(tutorial => toTitleCase(tutorial));
// }