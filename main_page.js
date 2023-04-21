var player_1_name = localStorage.getItem("player1_name");
var player_2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question turn: " + player_1_name;
document.getElementById("player_answer").innerHTML = "Answer turn: " + player_2_name;


function sendQuestion() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    actualAnswer = parseInt(number1) + parseInt(number2);
    console.log(actualAnswer);

    var question_equation = "<h4 id = 'question_display'>Q. " + num1 + " + " + num2 + "</h4>";
    input_box = "<br><br>Answer: <input type = 'text' id = 'input_check_answer'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check_answer()'>Check</button>";
    row = question_equation + input_box + check_button;
    document.getElementById("output").innerHTML = row;
}