player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;
documet.getElementById("player1_name").innerHTML=player1_name+":";
documet.getElementById("player2_name").innerHTML=player2_name+":";
documet.getElementById("player1_score").innerHTML=player1_score;
documet.getElementById("player2_score").innerHTML=player2_score;
documet.getElementById("player_question").innerHTML="turno para preguntar"+player1_name;
documet.getElementById("player_answer").innerHTML="turno para responder"+player2_name;
function send(){
    get_word=document.getElementById("word").value;
    word=get_word.toLowerCase();
    console.log(word);

    charAt2 = word.charAt(4);
	console.log(charAt2);

    charAt3 = word.charAt(2);
	console.log(charAt3);

charAt4 = word.charAt(6);
	console.log(charAt4);

    charAt5 = word.charAt(8);
	console.log(charAt5);

    charAt6 = word.charAt(10);
	console.log(charAt6);

    charAt7 = word.charAt(12);
	console.log(charAt7);

    charAt8 = word.charAt(13);
	console.log(charAt8);

    remove_chartAt2=word.replace(chartAt2,"_");
    remove_chartAt3=remove_chartAt2.replace(chartAt3,"_");
    remove_chartAt4=remove_chartAt3.replace(chartAt4,"_");
    remove_chartAt5=remove_chartAt4.replace(chartAt5,"_");
    remove_chartAt6=remove_chartAt5.replace(chartAt6,"_");
    remove_chartAt7=remove_chartAt6.replace(chartAt7,"_");
    remove_chartAt8=remove_chartAt7.replace(chartAt8,"_");

    question_word="<h4 id=word_display>q."+remote_chartAt8+"<h4/>"
    input_box="<br>respuesta:<input type="text" id="inputcheck">";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>"; row = question_word + input_box + check_button ; document.getElementById("output").innerHTML = row;
    documet.getElementById("word").value="";
}
question_turn="player1";
answer_turn="player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log("Respuesta en minusculas = " + answer);
    if(answer == word)
    {
if(answer_turn == "palyer1")
{
player1_score = player2_score +1;
document.getElementById("player1_score").innerHTML = player2_score

} 
else
{
    player2_score = player2_score +1;
    document.getElementById("player2_score").innerHTML = player2_score;

}
}
if(question_turn == "player1")
{
   question_turn = "player1"
   document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
}
if (answer_turn == "player1")
{
answer_turn = "player2"
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
} 
  else  
  {
    answer_turn = "player1"
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
  }
document.getElementById("output").innerHTML = "";
}