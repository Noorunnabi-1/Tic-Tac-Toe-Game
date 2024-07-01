let boxes = document.querySelectorAll(".box");               // for access all the class 
let resetBtn = document.querySelector("#reset-btn");         // for access the reset button
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// first of all trac the turn of 'X' player or 'O' player (so we make a variable)
let turnO = true; // playerX, playerO

// 8 win patterns
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


// Reset game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");   //hide show winner
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {   // playerO
            box.innerText = "O";
            turnO = false;
        } else {   //playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;                 // for disable button
        checkWinner();
    });
});

// After winning all bosex disable
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// enable Boxes
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";   //for empty the value of boxes
    }
};

// show winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();           // Disable boxes
}

// Check Winner
const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);