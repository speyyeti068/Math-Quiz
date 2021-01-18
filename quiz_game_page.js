function send(){
    var getNumber1 = document.getElementById("Number1").value;
    console.log(getNumber1);

    var getNumber2 = document.getElementById("Number2").value;
    console.log(getNumber2);

    var getOperation = document.getElementById("operators").value;
    console.log(getOperation);

    if(Number1 == null || Number2 == null || Number1 && Number2 == null){
        window.alert("Please Fill Out All Fields");
    } else if (Number1 && Number2 != null){
        question_number = "<center><h4>" + getNumber1 + getOperation + getNumber2 + "</h4></center>";
        input_box = "<center>Answer : <input type = 'text' id = 'input_check_box' style = 'margin-right: 50px'><center>"
        check_button = "<br><center><button style='background-color: lime' onclick = 'check()'>Check</button></center>"
        
        row = question_number + input_box + check_button;
    
        var answer = document.getElementById("output").innerHTML = row;
    }
}

