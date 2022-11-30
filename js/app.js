'use strict';

console.log('Hey world hey');

//TODO: Get users name - prompt - alert greeting back to user

let userName = prompt('Hello, What is your name?');
alert(`Welcome to my site ${userName}!`);

//TODO: prompt them with 5 yes or mo (y/n) qestion, alert if they got the question right or wrong 

let userTrivia = prompt('Would you like to play a guessing game with me? yes or no ?');

if(userTrivia === 'yes' || userTrivia === 'y'){
  alert(`YAY!, Please answer the following questions with yes/no or y/n ${userName}`);
  //console.log( 'YES! they decided to play');//
} else if (userTrivia === 'no' || userTrivia === 'n'){
  alert(`Ok next time then! Goodbye ${userName}`);
}

let questionOneGuess = prompt('I am 31 years old and I live in texas, Do I have any kids ?').toLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert(`Lucky guess ${userName}! ok lets go again`);
  //console.log('They were right' + questionOneGuess === 'yes' || questionOneGuess === 'y');//
} else if (questionOneGuess ==='no' || questionOneGuess === 'n'){
  alert('Of course I have children silly rabbit, ok next question');
}

let questionTwoGuess = prompt('Ok I have two children and they are the same gender. Are they both girls ?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert(`You are good at this ${userName}, yes they are girls and divass for sure!`);
  // console.log('They were right' + questionTwoGuess === 'yes' || questionTwoGuess === 'y');//
} else if (questionTwoGuess ==='no' || questionTwoGuess === 'n'){
  alert('Ha no boys, yet atleast. Lets go again ${userName} ');
}

let questionThreeGuess = prompt('I have been in the same industry for the last 9 years. Am I am mechanic ?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('Lol if Im working on your car we are both in trouble. Gotcha, lets try again');
} else if (questionThreeGuess ==='no' || questionThreeGuess === 'n'){
  alert('Yep no cars for me. I have been in IT for 9 years, everything from support desk to security engineer');
  //console.log('They were right' + questionThreeGuess === 'no' || questionThreeGuess === 'n');//
}

let questionFourGuess = prompt('Ok we know I am a IT guy with two girls. Is my favorite car a corvette?').toLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('No way, tesla roadster is faster than any corvette. HA!  ');
} else if (questionFourGuess ==='no' || questionFourGuess === 'n'){
  alert(`Wow you really do know me. IT guys loves tesla for the most part. Tesla would definitely be my choice ${userName}`);
  //console.log('They were right' + questionFourGuess === 'no' || questionFourGuess === 'n');//
}


//TODO: give a personalized message at the end 

alert(`Well thank you for playing this game with me. Next time I will stomp you for sure ${userName} Have a great day!`);
