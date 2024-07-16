let boxes = document.querySelectorAll(".btn");
let resetButton = document.getElementById("reset-btn");
let newGameButton = document.getElementById("newgame-btn");
let message = document.getElementById("msg");


const criteria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


let playerO = true;
var count = 0;


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO == true) {
            box.innerText = 'O';
            playerO = false;
        }
        else {
            box.innerText = 'X';
            playerO = true
        }
        box.disabled = true;
        count++;

        let isWnner = checkWinner();
        if (count == 9 && !isWnner) {
            gamedraw();
        }
    })
});

let Winner;

const disableBoxe = () => {
    for (var box of boxes) {
        box.disabled = true;
    }
}



const enableBoxes = () => {
    for (var box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
    message.innerText = "";
}


const gamedraw = () => {
    message.innerText = "The Game is a draw";
    disableBoxe();
}



const checkWinner = () => {
    for (var pattern of criteria) {
        var pos1 = boxes[pattern[0]].innerText;
        var pos2 = boxes[pattern[1]].innerText;
        var pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != " " && pos3 != " ") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }

        }

    }

};



const showWinner = (Winner) => {
    msg.innerText = ` Congratulations , winner is ${Winner}`;
    disableBoxe();
};




const resetGame = () => {
    playerO = true;
    enableBoxes();
}



resetButton.addEventListener("click", resetGame);
newGameButton.addEventListener("click", resetGame);


