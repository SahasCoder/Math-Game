function change1S(){
        document.getElementById("player1Text").style.backgroundColor="grey";
        document.getElementById("player1Text").style.color="white";
}

function change2S(){
        document.getElementById("player2Text").style.backgroundColor="grey";
        document.getElementById("player2Text").style.color="white";
}

function change1EX(){
    document.getElementById("player1Text").style.backgroundColor="white";
}

function change2EX(){
    document.getElementById("player2Text").style.backgroundColor="white";
}

function loginGame(){
    player1_name = document.getElementById("player1Text").value;
    player2_name = document.getElementById("player2Text").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);

    localStorage.setItem("userV" , "UserVed");
    window.location.replace("play_game.html");
    window.alert("Login Completed!");
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

if(e.keyCode == 13){
    player1_name = document.getElementById("player1Text").value;
    player2_name = document.getElementById("player2Text").value;

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player2_name);

    window.location.replace("play_game.html");
    window.alert("Login Completed!");
}
}



