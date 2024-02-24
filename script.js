//Accessing Elements

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let count = 0;

//declare a bool to decide the turn 

let turnO = true;

//create a 2d array to store all the winning patterns

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

//

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box Was Clicked");
        if(turnO){
            box.innerText = "O";
            box.style.color = "red";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkWinner();

        if (count === 9 && !iswinner){
            gameDraw();
        }
    })
});

const gameDraw = () =>{
    msg.innerText = "Game was a Draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=> {
    msg.innerText = `The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {

    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner is", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

const reset = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click", reset);


//------------------
let point = document.querySelector('#point')
document.addEventListener("mousemove",function(event) {
    gsap.to('#point', {
        top:event.y,
        left:event.x    
    })
})
