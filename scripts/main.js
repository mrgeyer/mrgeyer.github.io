projects = [{
  name: "Radical Street",
  type: "program",
  url: 'https://codepen.io/mrgeyer/full/OJJZBOy',
  codeURL: 'https://codepen.io/mrgeyer/pen/OJJZBOy',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/radicalStreet.png',
  subjects: ['Algebra'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "Bingo Card Maker",
  type: "program",
  url: 'https://github.com/mrgeyer/bingoCardMaker',
  codeURL: 'https://github.com/mrgeyer/bingoCardMaker',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/bingo.png',
  subjects: ['Classroom Management'],
  languages: ['JavaScript','HTML', 'CSS']
},            
{
  name: "Bounce or Cross",
  type: "program",
  url: 'https://codepen.io/mrgeyer/full/YMQWgZ',
  codeURL: 'https://codepen.io/mrgeyer/pen/YMQWgZ',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/bounceCross.png',
  subjects: ['Algebra','Precalculus'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "Something Similar to the Sieve of Eratosthenes",
  type: "program",
  url: 'https://codepen.io/mrgeyer/full/zPMZRv',
  codeURL: 'https://codepen.io/mrgeyer/pen/zPMZRv',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/sieve.png',
  subjects: ['Mathematics','Number Theory'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "This, That, or the Other Thing",
  type: "program",
  url: 'https://codepen.io/mrgeyer/pen/QOQaWg',
  codeURL: 'https://codepen.io/mrgeyer/pen/QOQaWg',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/ttot.png',
  subjects: ['Real Analysis'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "Lyra",
  type: "program",
  url: 'https://mrgeyer.github.io/Lyra',
  codeURL: 'https://github.com/mrgeyer/Lyra',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/Lyra.png',
  subjects: ['Biology','Anatomy','History of Math'],
  languages: ['JavaScript','HTML', 'CSS']
},            
            
{
  name: "Classtris",
  type: "program",
  url: 'https://methodsofmath.github.io/classtris/',
  codeURL: 'https://github.com/MethodsOfMath/classtris',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/classtris.png',
  subjects: ['Classroom Management'],
  languages: ['JavaScript','HTML', 'CSS', 'processing']
},
{
  name: "RPG Scrolling Map",
  type: "program",
  url: 'https://mrgeyer.github.io/Mather/',
  codeURL: 'https://github.com/mrgeyer/Mather',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/Mather.png',
  subjects: ['Game Development'],
  languages: ['JavaScript','HTML', 'CSS', 'processing']
},
{
  name: "Praxis Core Math Practice Demo",
  type: "program",
  url: 'https://mrgeyer.github.io/Praxis-Core-Math-Practice/',
  codeURL: 'https://github.com/mrgeyer/Mather',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/praxis.png',
  subjects: ['Algebra','Probability'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "Random Mathematician",
  type: "program",
  url: 'https://methodsofmath.github.io/mathematicians/',
  codeURL: 'https://github.com/methodsofmath/mathematicians',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/math.png',
  subjects: ['History of Math'],
  languages: ['JavaScript','HTML', 'CSS']
},
                       
{
  name: "Emoji Memory Game",
  type: "program",
  url: 'https://codepen.io/mrgeyer/full/owLgGL',
  codeURL: 'https://codepen.io/mrgeyer/pen/owLgGL',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/simon.png',
  subjects: ['Memory'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "Tic Tac Toe",
  type: "program",
  url: 'https://codepen.io/mrgeyer/full/qjaLPe',
  codeURL: 'https://codepen.io/mrgeyer/pen/qjaLPe',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/ticTacToe.png',
  subjects: ['Mathematics'],
  languages: ['JavaScript','HTML', 'CSS']
},
{
  name: "Basic Calculator",
  type: "program",
  url: 'https://codepen.io/mrgeyer/full/yXOYrR',
  codeURL: 'https://codepen.io/mrgeyer/pen/yXOYrR',
  image: 'https://raw.githubusercontent.com/mrgeyer/mrgeyer.github.io/master/image/calc.png',
  subjects: ['Mathematics'],
  languages: ['JavaScript','HTML', 'CSS']
}];

projectArea = document.getElementById("Projects");

function showAll() {
 let outputText = "";
 outputText += '<div class="row" >';
 outputText += '<div class="col-md-1 bord"></div>';
 outputText += '<div class="col-md-9 portfolio"><h3>Projects</h3></div>';
 outputText +=  '<div class="col-md-2 bord portfolio"></div></div>';

 for (let i = 0; i < projects.length; i++) {
   if (i%3 === 0) {
   outputText += '<div class="row" >';

     outputText += '<div class="col-md-1 bord"></div>';
   }
   outputText += '<div class="col-md-3 portfolio" >';   
     outputText += '<a href="';
     outputText += projects[i].url;
     outputText += '" target="_blank">';
     outputText += '<img src="';
     outputText += projects[i].image;
     outputText += '" title="';
     outputText += projects[i].name;
     outputText += '" class="img-responsive"></a><br>';
     if (projects[i].type === 'program') {
      outputText += '<a href="';
      outputText += projects[i].codeURL;
      outputText += '" target="_blank" class="btn">Code</a>';
     }
   outputText += '</div>';

   if (i%3 === 2) {
    outputText += '<div class="col-md-2 portfolio bord"> </div>';
    outputText += '</div>';
   }
 }
 if (projects.length % 3 == 1) {
 
    outputText += '<div class="col-md-6 portfolio"> </div>';
   outputText += '<div class="col-md-2 portfolio"> </div>';
    outputText += '</div>';
   
 } else if (projects.length % 3 == 2) {
            
   outputText += '<div class="col-md-3 portfolio"> </div>';
   outputText += '<div class="col-md-2 portfolio"> </div>';
    outputText += '</div>';        
                   
 }
  
  console.log(outputText);
  projectArea.innerHTML = outputText;
}

showAll();
