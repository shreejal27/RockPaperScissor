var u=0;
var c=0;
var userWinCounter = 0;
var computerWinCounter = 0;
var draw = 0;

var userBox= document.getElementById("user_box");
var computerbox= document.getElementById("computer_box");


function startGame(value){
    var user_choice= value;
    user(user_choice);
    cvalue();
    gameLogic(u,c);
    updateWinCounter(userWinCounter,computerWinCounter,draw);
}

function user(user_choice){
    if(user_choice == "1"){
        userBox.innerHTML = "<img src='icons/rock-modified.png'  width='200px' height='200px'>";
        u=1;
    }
    else if(user_choice == "2"){
         userBox.innerHTML = "<img src='icons/paper-modified.png'  width='200px' height='200px'>";
         u=2;
    }
    else{
         userBox.innerHTML = "<img src='icons/scissor-modified.png'  width='200px' height='200px'>";
         u=3;
    }
}

function cvalue(){
    var computer_choice = Math.floor(Math.random()*3)+1;
    computer(computer_choice);
}

function computer(computer_choice){

    if(computer_choice == 1){
        computerbox.innerHTML = "<img src='icons/rock-modified.png'  width='200px' height='200px'>";
         c=1;
    }
   else if(computer_choice == 2){
          computerbox.innerHTML = "<img src='icons/paper-modified.png'  width='200px' height='200px'>";
          c=2;
    }
    else{
         computerbox.innerHTML = "<img src='icons/scissor-modified.png'  width='200px' height='200px'>";
         c=3;
    }
}
       
function gameLogic(u,c){
    const msg1= "User Wins !";
    const msg2= "Computer Wins !"; 
    const msg3= "Draw !!!";
    const msg4= "!!!!! Game Crashed !!!!!";
    var resultText = document.getElementById("resultText");

    if(u==1 && c==1){
        resultText.innerHTML= msg3;
        draw++;
    }
    else if(u==1 && c==2){
        resultText.innerHTML= msg2;
        computerWinCounter++;
    }
    else if(u==1 && c==3){
        resultText.innerHTML= msg1;
        userWinCounter++;
    }
    else if(u==2 && c==1){
        resultText.innerHTML= msg1; 
        userWinCounter++;     
    }
    else if(u==2 && c==2){
        resultText.innerHTML= msg3;
        draw++;
    }
    else if(u==2 && c==3){
        resultText.innerHTML= msg2; 
        computerWinCounter++;    
    }
    else if(u==3 && c==1){
        resultText.innerHTML= msg2;
        computerWinCounter++;
   
    }
    else if(u==3 && c==2){
        resultText.innerHTML= msg1;
        userWinCounter++;
    }
    else if(u==3 && c==3){
        resultText.innerHTML= msg3;
        draw++;
      
    }
    else{
        resultText.innerHTML= msg4;
    }
}

function updateWinCounter(userWinCounter, computerWinCounter, draw){
    var totalUserWin= document.getElementById("userWins");
    var totalComputerWin= document.getElementById("computerWins");
    var drawCount= document.getElementById("draw");
    totalUserWin.innerHTML= "You: &ensp;" + userWinCounter;
    totalComputerWin.innerHTML= "Computer: &ensp;" + computerWinCounter;
    drawCount.innerHTML= "Draw: &ensp;" + draw;
}