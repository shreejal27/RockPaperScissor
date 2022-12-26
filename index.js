function Uvalue(value){
    var user_choice= value;
    user(user_choice);
    Cvalue();
}

function user(user_choice){
    var userBox= document.getElementById("user_box");
    if(user_choice == "1"){
        userBox.innerHTML = "<img src='icons/rock-modified.png'  width='300px' height='300px'>";
    }
    else if(user_choice == "2"){
    userBox.innerHTML = "<img src='icons/paper-modified.png'  width='300px' height='300px'>";
    }
    else{
    userBox.innerHTML = "<img src='icons/scissor-modified.png'  width='300px' height='300px'>";
    }
}

function Cvalue(){
    var computer_choice = Math.floor(Math.random()*3)+1;
    console.log(computer_choice);
    computer(computer_choice);
}

function computer(computer_choice){
    var computerbox= document.getElementById("computer_box");

    if(computer_choice == 1){
        computerbox.innerHTML = "<img src='icons/rock-modified.png'  width='300px' height='300px'>";
    }
   else if(computer_choice == 2){
    computerbox.innerHTML = "<img src='icons/paper-modified.png'  width='300px' height='300px'>";
    }
    else{
    computerbox.innerHTML = "<img src='icons/scissor-modified.png'  width='300px' height='300px'>";
    }
}
       
