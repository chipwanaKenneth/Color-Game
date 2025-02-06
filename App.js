const content = document.getElementById("content");
const level = document.getElementById("level");
const score = document.getElementById("score");
const colorBox = document.getElementById("colorBox");
const gameStatus = document.getElementById("gameStatus");
const colorOptionContainer = document.getElementById("colorOption");
const colorOption1 = document.getElementById("1");
const colorOption2 = document.getElementById("2");
const colorOption3 = document.getElementById("3");
const colorOption4 = document.getElementById("4");
const colorOption5 = document.getElementById("5");
const colorOption6 = document.getElementById("6");
const optionBtns =  document.querySelectorAll(".colorOption");
const newGameButton = document.getElementById("newGameButton");
const next = document.getElementById("next");
const instructionBtn = document.getElementById("instHdr");
const gameInstructions =document.getElementById("gameInstructions");
const endGameWindow = document.getElementById("endGame");
const result = document.getElementById("result")
const startOverButton  = document.getElementById("startOver")

let scoreValue = 0;
let levelNumber = 0;

const Level = [
    {
        level: "Level 1",
        colorBox: "#FFB4A2",
        optionBtn: ["#4635B1","#212121","#FFB4A2","#F14A00","#FF8383","#72BAA9"],
        
    },
    {
        level: "Level 2",
        colorBox: "#EF9C66",
        optionBtn: ["#78ABA8","#EF9C66","#FCDC94","#E5989B","#8174A0","#FCE7C8"]  
    },
    {
        level: "Level 3",
        colorBox: "#78ABA8",
        optionBtn: ["#78ABA8","#213555","#FCDC94","#FF8383","#C8CFA0","#FFF574"]  
    },
    {
        level: "Level 4",
        colorBox: "#FCDC94",
        optionBtn: ["#78ABA8","#EF9C66","#FCDC94","#E5989B","#C8CFA0","#FCE7C8"]  
    },
    {
        level: "Level 5",
        colorBox: "#E5989B",
        optionBtn: ["#78ABA8","#EF9C66","#FFCCE1","#FFCFEF","#E195AB","#E5989B"]  
    },
    {
        level: "Level 6",
        colorBox: "#C8CFA0",
        optionBtn: ["#FFF8DE","#EF9C66","#FCDC94","#D0E8C5","#C8CFA0","#AAB99A"]  
    },
    {
        level: "Level 7",
        colorBox: "#FCE7C8",
        optionBtn: ["#ddb985","#EF9C66","#FCDC94","#E5989B","#C8CFA0","#FCE7C8"]  
    },
    {
        level: "Level 8",
        colorBox: "#4635B1",
        optionBtn: ["#B2A5FF","#EF9C66","#4635B1","#E5989B","#DAD2FF","#493D9E"]  
    },
    {
        level: "Level 9",
        colorBox: "#FFCDB2",
        optionBtn: ["#FFCDB2","#EF9C66","#FCDC94","#dd8b5f","#a16f54","#FCE7C8"]  
    },
    {
        level: "Level 10",
        colorBox: "#B5828C",
        optionBtn: ["#c3afaf","#d9b0b1","#e1a5a7","#E5989B","#B5828C","#8d636b"]  
    }
]


function update(Level) {
    level.innerHTML = Level.level;
    colorBox.style.backgroundColor = Level.colorBox;
    colorBox.value = Level.colorBox;
    colorOption1.style.backgroundColor = Level.optionBtn[0];
    colorOption1.value = Level.optionBtn[0];
    colorOption2.style.backgroundColor = Level.optionBtn[1];
    colorOption2.value = Level.optionBtn[1];
    colorOption3.style.backgroundColor = Level.optionBtn[2];
    colorOption3.value = Level.optionBtn[2];
    colorOption4.style.backgroundColor = Level.optionBtn[3];
    colorOption4.value = Level.optionBtn[3];
    colorOption5.style.backgroundColor = Level.optionBtn[4];
    colorOption5.value = Level.optionBtn[4];
    colorOption6.style.backgroundColor = Level.optionBtn[5];
    colorOption6.value = Level.optionBtn[5];
}



function game(event) {
    let clickedButton = event.target.value
    if(clickedButton === colorBox.value){
        scoreValue++
        score.innerHTML = scoreValue;
        gameStatus.innerHTML = "Correct";
        colorOptionContainer.style.display = "none";
        // for(let bt of optionBtns){
        //     bt.style.display = "none";
        // }
    }else{
        gameStatus.innerHTML = "That was wrong"
        colorOptionContainer.style.display = "none";
    }
        console.log(clickedButton)
        console.log(colorBox.value)
        
}

function Next() {
    if(levelNumber++ >= Level.length - 1){
        endGame();
        
    }else{      
        update(Level[levelNumber]);
    }
    gameStatus.innerHTML = "";
    colorOptionContainer.style.display = "flex"; 
}

for(let btn of optionBtns){
   btn.addEventListener("click", game)
}

function newGame() {
    update(Level[0]);
    scoreValue = 0
    score.innerHTML = scoreValue;
    gameStatus.innerHTML = "";
    colorOptionContainer.style.display = "flex"; 
    levelNumber = 0;
}

function endGame (){
    content.classList.toggle("hidden"); 
    endGameWindow.classList.toggle("hidden");
    if(scoreValue >= 8 ){
        result.innerText = "Congrats Your Eyes Are In Pristine Condition "
    }else if(scoreValue >= 5){
        result.innerText = "Awesome Your Eyesight Is Above Average" 
    }else {
        result.innerText = "Bummer Your Eyesight Is Below Average"
    }
}

startOverButton.addEventListener("click",() => {
    newGame()
})

newGameButton.addEventListener("click",() => {
    content.classList.toggle("hidden"); 
    endGameWindow.classList.toggle("hidden");
    newGame()
})

next.addEventListener("click", () => {
    Next()
}) 

instructionBtn.addEventListener("click",() => {
    gameInstructions.classList.toggle("hidden");
})
update(Level[0])