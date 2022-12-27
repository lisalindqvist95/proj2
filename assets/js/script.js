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
    // Usage of shuffle
    let arr = ["Yes.", "Yup!", "Sí.", "No.", "Nope!", "No way José.", "Maybe...", "Ask Again Later...", "Without a doubt.", "Yes definitely.", "Don't count on it.", "Outlook not so good.", "Cannot predict now.", "Why would you ask that?", "Don't worry about it.", "What do you think?"];
    arr = shuffleArray(arr);

    document.getElementById("answer2").innerHTML =
        arr[0];
}

// Lucky number generator : 
document.getElementById("number").innerHTML =
Math.floor(Math.random() * 101);


// Ask a question functions: 
let arr2 = ["Yes.", "Yup!", "Sí.", "No.", "Nope!", "No way José.", "Maybe...", "Ask Again Later...", "Without a doubt.", "Yes definitely.", "Don't count on it.", "Outlook not so good.", "Cannot predict now.", "Why would you ask that?", "Don't worry about it.", "What do you think?"];
    arr2 = shuffleArray(arr2);

    document.getElementById("answer3").innerHTML =
        arr2[0];

