//don't like how its done
/*document.onkeyup = function(){
  alert("pressed a button");
}
console.log(choice);
*/
// starts game
//do i have to put all functions into one massive function?
// how do I write functions but not call them right away...
function showGameText()
{
  document.getElementById("gameText").style.display ="block";
}

var gameWord = "goomba";
var guess;
// takes a letter from the user

function takeGuess()
  {
  guess = document.getElementById("guess").value;
  alert(guess);
  }
 //var something = takeGuess();
  console.log(guess);

function writeHtml()
{
  document.getElementById("guessedLetters").innerHTML = "this should work " + guess;

    if(guess != gameWord[0])  
      { 
        alert("wrong guess again");
      }
}



/*
var number = 10;
function add()
{
  number = number + 5;
  return number;
}
var newNumber = add();
console.log(newNumber);
*/







