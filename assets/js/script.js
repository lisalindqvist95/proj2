/*  Let the user generate a response by clicking enter instead of clicking the button, 
code structure from https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp */
var input = document.getElementById("userQuestion");

// Execute function when the user presses enter on the keyboard
input.addEventListener("keypress", function (event) {
// If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
// Cancel the default action, if needed
        event.preventDefault();
 // Trigger the button element with a click
        document.getElementById("myBtn").click();
    }
});

/* Execute function when the user presses enter on the keyboard, 
for game, lucky-number and message */ 
var button = document.getElementById("aBtn");
button.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("aBtn").click();
    }
});

// Function to print user-question 
/* Tutorial from
https://www.youtube.com/watch?v=KB6Yg5hNrqc */
function askFunction() {
    let userQuestion = document.querySelector("#userQuestion");
    let printQuestion = document.querySelector("#printQuestion");
    // Print the value of what the user has put into the input box 
    printQuestion.innerHTML = userQuestion.value;
}

/* Shuffle Array code from: 
https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html */

function shuffleArray(array) {
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

    // Print user-answer 
    function printAnswer() {
    // Usage of shuffle
    let arr = ["Yes.", "Yup!", "Sí.", "No.", "Nope!", "No way José.", "Maybe...", "Ask Again Later...", "Without a doubt.", "Yes definitely.", "Don't count on it.", "Outlook not so good.", "Cannot predict now.", "Why would you ask that?", "Don't worry about it.", "What do you think?"];
    arr = shuffleArray(arr);
    // Answers from https://en.wikipedia.org/wiki/Magic_8_Ball

    // Print the first value of the array after it has been shuffled
    document.getElementById("answer").innerHTML =
        arr[0];
    }
 
         // Message generator, print answer: 
        function printMessage() {    
        let arr2 = ["Make it happen.", "Someone is thinking about you.", "Have you considered getting a tattoo?", "You’re good.", "Maybe it’s time to treat yourself.", "You look pretty today.", "Don’t rush!", "Don’t feel sad if you didn’t get the answer you wanted.", "You're on the right path.", "If you look back, you’ll soon be going that way.", "An alien of some sort will be appearing to you shortly.", "Flattery will go far tonight.", "Don’t behave with cold manners.", "It is a good day to have a good day.", "You are not illiterate."];
        arr2 = shuffleArray(arr2);
        // Answers from https://examples.yourdictionary.com/articles/funny-fortune-cookie-sayings.html
    
        // Print the first value of the array after it has been shuffled
        document.getElementById("message").innerHTML = arr2[0]; 
        }  



// Lucky number generator: 
function luckyNumber() {
   // Generate a number between 0-9999;
    document.getElementById("number").innerHTML = Math.floor(Math.random() * 10000);
}



// Game Feature

/* Dice game code from: 
https://www.geeksforgeeks.org/building-a-dice-game-using-javascript/
*/
// Function to roll the dice
function rollTheDice() {
    setTimeout(function () {
        // generate a number between 1-6 for dice one and two
        var randomNumber1 = Math.floor(Math.random() * 6) + 1;
        var randomNumber2 = Math.floor(Math.random() * 6) + 1;
        
        // display image of the "rolled" dice
        document.querySelector(".img1").setAttribute("src", "assets/images/" +
            "dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src", "assets/images/" +
            "dice" + randomNumber2 + ".png");

         // See which player wins:

         // display message if number dice 1 is the same as dice number 2
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h2").innerHTML = "Draw!";
            document.querySelector(".small").innerHTML = "Why don't you try again?";
        
        // display message if number dice 1 is smaller than dice number 2
        } else if (randomNumber1 < randomNumber2) {
            document.querySelector("h2").innerHTML = ("The universe WINS!");
            document.querySelector(".small").innerHTML = "Maybe you should take it easy today.";
        
        // display message if number dice 1 is bigger than dice number 2
        } else {
            document.querySelector("h2").innerHTML = ("You WIN!");
            document.querySelector(".small").innerHTML = "<a href='https://www.youtube.com/watch?v=G2e_M06YDyY' target='_blank'>" + "Time to seize the day!" + "</a>";
        }
    }, 2500);
}

    