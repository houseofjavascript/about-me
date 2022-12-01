'use strict';

let score = 0;

console.log('Hey world hey');

//TODO: Get users name - prompt - alert greeting back to user

let userName = prompt('Hello, What is your name?');
alert(`Welcome to my site ${userName}!`);

//TODO: prompt them with 5 yes or mo (y/n) qestion, alert if they got the question right or wrong 

let userTrivia = prompt('Would you like to play a guessing game with me? yes or no ?').toLowerCase();

if (userTrivia === 'yes' || userTrivia === 'y') {
  alert(`YAY! Please answer the following questions with yes/no or y/n ${userName}`);
  //console.log( 'YES! they decided to play');//
} else if (userTrivia === 'no' || userTrivia === 'n') {
  alert(`Sorry you still have to play ${userName} HAHA`);
}

function questionOne() {
  let questionOneGuess = prompt('I am 31 years old, I live in texas and love gaming, Do I have any kids ?').toLowerCase();

  if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert(`Lucky guess ${userName}! ok lets go again`);
    score++;
    //console.log('They were right' + questionOneGuess === 'yes' || questionOneGuess === 'y');//
  } else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('Of course I have children silly rabbit, ok next question');
  }
}

function questionTwo() {
  let questionTwoGuess = prompt('Ok I have two children and they are the same gender. Are they both girls ?').toLowerCase();

  if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert(`You are good at this ${userName}, yes they are girls and divass for sure!`);
    score++;
    // console.log('They were right' + questionTwoGuess === 'yes' || questionTwoGuess === 'y');//
  } else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert(`Ha no boys, yet atleast. Lets go again ${userName}`);
  }
}
function questionThree() {
  let questionThreeGuess = prompt('I have been in the same industry for the last 9 years. Am I a mechanic ?').toLowerCase();

  if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert(`Lol if Im working on your car ${userName} we are both in trouble. Gotcha, lets try again`);
  } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert('Yep no cars for me. I have been in IT for 9 years, everything from support desk to security engineer');
    score++;
    //console.log('They were right' + questionThreeGuess === 'no' || questionThreeGuess === 'n');//
  }
}

function questionFour() {
  let questionFourGuess = prompt('Ok we know I am a IT guy with two girls. Is my favorite car a corvette?').toLowerCase();

  if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
    alert('No way, tesla roadster is faster than any corvette. HA!');
  } else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert(`Wow you really do know me. IT guys loves tesla's for the most part. Tesla would definitely be my choice ${userName}`);
    score++;
    //console.log('They were right' + questionFourGuess === 'no' || questionFourGuess === 'n');//
  }
}

function questionFive() {
  let questionFiveGuess = prompt('Do I prefer pancakes over waffles?').toLowerCase();

  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert('Yes a good pancake beats almost all food');
    score++;
    //console.log('They were right')
  } else if (questionFiveGuess === 'no' || questionFiveGuess === 'no') {
    alert(`A properly made pancake is better than a waffle any day ${userName}`);
  }
}

function questionSix() {
  let myNum = '5';
  let guessNumber = 4;
  while (guessNumber > 0) {
    let questionSixGuess = prompt('I am thinking of my favorite number between 1 and 20. You have only 4 chances. Can you tell me that number?');
    if (questionSixGuess === myNum) {
      alert('Wow what a lucky guess. Good job');
      score++;
      break;
    } else if (questionSixGuess > myNum) {
      guessNumber--;
      alert(`Thats is too high try again. You have ${guessNumber} attempts left`);
    } else if (questionSixGuess < myNum) {
      guessNumber--;
      alert(`That is too low try again. You have ${guessNumber} attempts left`);
    }
    if (guessNumber === 0) {
      alert('Sorry you are out of chances, the answer was 5!');
    }
  }
}

function questionSeven() {
  let guess = 6;
  let colors = ['black', 'purple'];
  for (let i = 0; i < 6; i++) {
    let questionSevenGuess = prompt('I have atleast two favorite colors out of so many. Can you guess atleast one ?').toLowerCase();
    if (questionSevenGuess === colors[i]) {
      alert('wow that was a lucky guess, goodjob ');
      score++;
      break;
    } else if (questionSevenGuess !== colors[i]) {
      guess--;
      alert(`Ha thats wrong. Try again. You have ${guess} left`);
    }
    if (guess === 0) {
      alert('You are out of chances sorry. The answer was purple and black!');
    }
  }
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFix();
questionSix();
questionSeven();


//TODO: give a personalized message at the end 

alert(`That was fun ${userName}, you got ${score} out of 7 correct!`);

// create a top 10 at the bottom of html in an ordered list (tv shows) and, convert work expierence and education summary into an unordered list in html

// 6th question to a guessing game that takes numeric input by prompting users to guess a number. tell them if it is too high or too low. give them only 4 chances. if all chances are gone give them the answer


// 7th question will be multiple correct answers stored into an array, give them 6 chances to get it correct. after display all correct answers.

// keep track of the total of correct answers at the end . tell them out of 7 how many did they get correct.

// continue to use console.logs and add more css and html 