function addUser (){
    localStorage.removeItem("player1Name");

    localStorage.removeItem("player2Name");
    
    localStorage.removeItem("setScore");

    var player1Name = document.getElementById("input1").value;

    var player2Name = document.getElementById("input2").value;

    localStorage.setItem("player1Name", player1Name);

    localStorage.setItem("player2Name", player2Name);

    var score = prompt("How many points do you want to play to?", 0);
    
    if(score <= 0){
        window.alert("Please Enter A Postive Number"); 
    } else {
        localStorage.setItem("setScore", score);

        window.location = "quiz_game_page.html";

        localStorage.removeItem("input2");
    }
}