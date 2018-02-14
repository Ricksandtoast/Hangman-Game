//first start the game
var startGame = 
{
   guess: null, 
   randomWordsArray: ["goomba","mushroom","mario", "boo","koopa","bowser"],
   randomWord: null,
   searchCount: 0,
   guessesLeft: 7,
   guessedLetters: [],
   //starts game over

  playGame:function()
  {
    //write variable to increase array size
    randomNum = Math.floor((Math.random()*5)),
    this.randomWord = this.randomWordsArray[randomNum];
    console.log(this.randomWord);

  },
  //allows "select a letter" to display
  showGameText: function()
  {
    
    document.getElementById("gameText").style.display ="block";

  },

  //write to console within the object??
  // writeToConsole:function(x)
  // {
  //   console.log(x);
  // },


  //takes a guess from the form line and adds letter to the guess array
  takeGuess:function()
  {
    //gets guess from html form
  this.guess = document.getElementById("guess").value;
  this.guessedLetters.push(this.guess);
  
  },


  //boolean statement testing to see if the guessed letter is in the word
  validateGuess:function(guess)
  {
    //not sure why I made this??
    var guess = this.guess;
   
    // if(guess === null)
    // {
    //   alert("start the game");
    // }
    if(this.randomWord.includes(guess))
    {

      alert("Correct!");
      
      return true;

    }
     if(!this.randomWord.includes(guess))
     {

       alert("wrong guess again");
       console.log(this.randomWord);
       this.guessesLeft --;
       return false;

     }
     //might not need this else statement
    else
    {

      console.log(guess);
      console.log(this.randomWord[searchCount]);
      alert("correct");
      this.searchCount++;
      return true;

    }
  },

  showGuessesLeft: function()
  {
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " +this.guessesLeft;
    if(this.guessesLeft === 0)
    {
      alert("You lose: click Play game play again");
    }
  },

  showLettersGuessed: function()
  {console.log(this.guessedLetters.length);
    for(var i = 0; i < this.guessedLetters.length; i++)
    {
      console.log(i);
      var node = document.createElement("li");
      var guessList = document.createTextNode(i + ": " + this.guessedLetters[i]);
     
      //adds guesslist to node
      node.appendChild(guessList);
      document.getElementById("lettersGuessed").appendChild(node);
    }
  },

};
//this runs before html action why?
// function takeGuessAndValidate()
// {
//   startGame.
// }