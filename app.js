let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// turn o ki hai truw toh o print hoga false hai toh x print hoga
let turnO = true;

// array to store winning patterns
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


const ResetGame = () => {
   turnO = true;
   enableBoxes();
   msgContainer.classList.add("hide");
}



const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
    if(turnO){ // PLAYER O
        box.innerText = "O";
        turnO = false;
    }
    else{ // PLAYER X
        box.innerText = "X";
        turnO = true; 
    }
    // bcs ek baar o ya x aane kai baad agar dubara click kar rhe thai toh change ho rha tha isliye
    box.disabled = true;


    checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = ` Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    // isse humw ek baar winner mil gya toh hum baar baar run nhi kar rhe hongeee baar baar winner nhi milengeee
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
    for(let pattern of winPatterns){

        // boxes ki haar position sai patters check kare hai win patterns check kar rhe hai
        let pos1Val = boxes[pattern[0]].innerText;
        let pos1Va2 = boxes[pattern[1]].innerText;
        let pos1Va3 = boxes[pattern[2]].innerText;


        if(pos1Val != "" && pos1Va2 != "" && pos1Va3 != ""){
            if(pos1Val === pos1Va2 && pos1Va2 === pos1Va3){
                showWinner(pos1Val);
            }
        }

    }
}

newBtn.addEventListener("click" , ResetGame);
resetBtn.addEventListener("click" , ResetGame);