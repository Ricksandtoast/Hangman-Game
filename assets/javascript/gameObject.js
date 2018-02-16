//first start the game


var startGame =
{
   guess: null, 
   randomWordsArray: ["goomba","mushroom","mario", "boo","koopa","bowser"],
   randomWord: null,
   searchCount: 0,
   guessesLeft: 7,
   guessedLetters: [],
   losses: 0,
   wins: 0,
   lostGame: false,

   
  //starts game
  playGame:function()
  {
    

    //write variable to increase array size
    this.lostGame = false;
    randomNum = Math.floor((Math.random()*5)),
    this.randomWord = this.randomWordsArray[randomNum];
    console.log(this.randomWord);

    //clears _ to start new game
    var list = document.getElementById("spaceForLetters");
    list.innerHTML = "";

    //gives _ for each letter of the random word
    var str = "_ ";
    for(var i = 0; i < this.randomWord.length; i++)
    {

      var node = document.createElement("LI");              
      var textnode = document.createTextNode(str);       
      node.appendChild(textnode);                         
      document.getElementById("spaceForLetters").appendChild(node);
    
    }

  },  

  //plays music

  //allows "select a letter" to display
  showGameText: function()
  {
    
    document.getElementById("gameText").style.display ="block";

  },
 
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
    if(this.guess == "")
    {
        alert("wrong guess again");
        this.guessesLeft --;
    }
    if(this.randomWord.includes(guess))
    {

      alert("Correct!");
      
      return true;

    }
     if(!this.randomWord.includes(guess))
     {

       alert("wrong guess again");
       this.guessesLeft --;
       return false;

     }
     //might not need this else statement
    else
    {

      alert("correct");
      this.searchCount++;
      return true;

    }
  },
  //display guess left
  showGuessesLeft: function()
  {
    //displays guesses left
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " +this.guessesLeft;
    
    if(this.guessesLeft === 0)
    {

      alert("The answer was: " + this.randomWord);
      alert("You lose: Click Play game to play again");

      //sets lostgame to true to play game over music
     
      var music = document.getElementById("Game-Over");
      music.play();
      losses++;

      var node = document.createElement("LI");
      var textNode = document.createTextNode(this.losses);
      node.appendChild(textNode);
      document.getElementById("losses").appendChild(node);

    }
  },


  showLettersGuessed: function()
  {

      //var guessThing = document.getElementById("lettersGuessed").innerHTML = this.guess;
      var node = document.createElement("LI");
      var textNode = document.createTextNode(this.guess + " ");
      node.appendChild(textNode);
      document.getElementById("lettersGuessed").appendChild(node);
      
      //var guessList = document.createTextNode(this.guessedLetters[i]+ " ");
      //adds guesslist to node;
      //var guess = this.guess;
      //guessThing.appendChild(this.guess);
  },
  replaceLineWithLetter:function()
  {

    if(this.randomWord.includes(this.guess))
    {
      for(var i = 0; i < this.randomWord.length;)
      {
        if(this.guess == this.randomWord[i])
        {
          var div = document.getElementById("spaceForLetters");
          div.getElementsByTagName("LI")[i].innerHTML = this.guess;
          i++;
        }
        else
        {
          i++;
        }
      }
    }
    

  },
  winsAndLosses:function()
  {
    //determines if _ is filled in with letter

    var myWord ="";
    var div = document.getElementById("spaceForLetters");
    
    for(var i =0; i < this.randomWord.length;i++)
    {

      var  aLetter = div.getElementsByTagName("LI")[i].textContent;
      myWord = myWord + aLetter;

    }

    var myNode = document.getElementById("spaceForLetters");
    
    if(myWord.includes(this.randomWord))
    {

      alert("you win");
      var audio = document.getElementById("Mario-Theme");
      audio.play();
      this.wins++;
      var win = document.getElementById("wins");
      win.innerHTML = "wins: " + this.wins;
    }
  }
};
//this runs before html action why?
// function takeGuessAndValidate()
// {
//   startGame.
// }

