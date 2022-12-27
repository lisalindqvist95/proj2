// Ask a question functions: 
var input = document.getElementById("userQuestion");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("myBtn").click();
    }
});

function askFunction() {
    let userQuestion =
        document.querySelector("#userQuestion")
    let answer = document.querySelector("#answer")
    answer.innerHTML = userQuestion.value;
}

/* Shuffle Array code from: 
https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html */
function printAnswer() {
    function shuffleArray(array){ 
        let curId = array.length;
        // There remain elements to shuffle
        while (0 !== curId) {
            // Pick a remaining element
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            // Swap it with the current element.
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }
    // Usage of shuffle
    let arr = ["Yes.", "Yup!", "Sí.", "No.", "Nope!", "No way José.", "Maybe...", "Ask Again Later...", "Without a doubt.", "Yes definitely.", "Don't count on it.", "Outlook not so good.", "Cannot predict now.", "Why would you ask that?", "Don't worry about it.", "What do you think?"];
    arr = shuffleArray(arr);

    document.getElementById("answer2").innerHTML =
        arr[0];


}


// Lucky number generator : 
function luckyNumber() {
document.getElementById("number").innerHTML =
Math.floor(Math.random() * 1001);
}



// Message generator : 
function printoAnswer(){
  function shuffleArray(array){ 
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
  }
  let arr2 = ["Make it happen.", "Someone is thinking about you.", "Have you considered getting a tattoo?", "You’re good.", "Maybe it’s time to treat yourself.", "You look pretty today.", "Don’t rush!", "Don’t feel sad if you didn’t get the answer you wanted.", "You're on the right path.", "If you look back, you’ll soon be going that way.", "An alien of some sort will be appearing to you shortly.", "Flattery will go far tonight.", "Don’t behave with cold manners.", "It is a good day to have a good day.", "You are not illiterate."];
  arr2 = shuffleArray(arr2);

  document.getElementById("answer3").innerHTML =
      arr2[0];
}

// Game
var player1 = "You";
var player2 = "The universe";


// Function to roll the dice
function rollTheDice() {
  setTimeout(function () {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src","assets/images/" +
      "dice" + randomNumber1 + ".png");

    document.querySelector(".img2").setAttribute("src","assets/images/" +
      "dice" + randomNumber2 + ".png");

    if (randomNumber1 === randomNumber2) {
      document.querySelector("h2").innerHTML = "Draw!"; 
      document.querySelector(".small").innerHTML = "Why don't you try again?"
    }

    else if (randomNumber1 < randomNumber2) {
      document.querySelector("h2").innerHTML
        = ("The universe WINS!");
        document.querySelector(".small").innerHTML = "Maybe you should take it easy today."
    }

    else {

      document.querySelector("h2").innerHTML
        = ("You WIN!");
        document.querySelector(".small").innerHTML = "<a href='https://www.youtube.com/watch?v=G2e_M06YDyY' target='_blank'>" + "Time to seize the day!" + "</a>";
    }
  }, 2500);
}

