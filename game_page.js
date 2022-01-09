player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;

function goBack(){
    window.location.replace("index.html");
    console.log("Action completed = back");
}

function send(){
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	question_html = "<h4>" + number1 + "X" + number2 + "</h4>";
	input_html = "<input id='answer_input' class='form-control' placeholder='Enter your answer'>";
	button_html = "<br><button onclick='sendAnswer()' class='btn btn-success'>Send</button>";
	row = question_html + input_html + button_html;
	document.getElementById("output").innerHTML=row;
}
function sendAnswer(){
	user_answer = parseInt(document.getElementById("answer_input").value);
	question_turn = "player1";
	answer_turn = "player2";
	if(user_answer == actual_answer){
		if(answer_turn == "player1"){
			player1_score = player1_score + 1;
			document.getElementById("player1_score").innerHTML=player1_score;
		}
		else{
			player2_score = player2_score + 1;
			document.getElementById("player2_score").innerHTML=player2_score;
		}
	}

	if(question_turn == "player1"){
		question_turn = "player2";
		document.getElementById("player_question").innerHTML="Question Turn:" + player2_name;
	}
	else{
		question_turn = "player1";
		document.getElementById("player_question").innerHTML="Question Turn:" + player1_name;
	}

	if(answer_turn == "player1"){
		answer_turn = "player2";
		document.getElementById("player_answer").innerHTML="Answer Turn:" + player1_name;
	}
	else{
		answer_turn = "player1";
		document.getElementById("player_answer").innerHTML="Answer Turn:" + player1_name;
	}
	document.getElementById("output").innerHTML="";
}
