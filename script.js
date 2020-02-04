button = document.querySelector(".button");
questions = document.querySelectorAll(".input");
questText = document.querySelectorAll(".qText");

button.addEventListener('click', function() {
    var score = 0;
    for(var i = 0; i < questions.length; i++) {
        var value = new Array();
        value = questText[i].getAttribute('value');

        value = value.split(" ");

        if(value[1] == "-") {
            if((parseInt(value[0], 10) - parseInt(value[2], 10)) == (parseInt(questions[i].value, 10))) {
                questions[i].style.backgroundColor = "rgb(190, 255, 190)";
                score++;
            } else {
                questions[i].style.backgroundColor = "rgb(245, 110, 110)";
            }
        }

        if(value[1] == "+") {
            if((parseInt(value[0], 10) + parseInt(value[2], 10)) == (parseInt(questions[i].value, 10))) {
                questions[i].style.backgroundColor = "rgb(190, 255, 190)";
                score++;
            } else {
                questions[i].style.backgroundColor = "rgb(245, 110, 110)";
            }
        }

        if(value[1] == "/") {
            if((parseInt(value[0], 10) / parseInt(value[2], 10)) == (parseInt(questions[i].value, 10))) {
                questions[i].style.backgroundColor = "rgb(190, 255, 190)";
                score++;
            } else {
                questions[i].style.backgroundColor = "rgb(245, 110, 110)";
            }
        }

        if(value[1] == "*") {
            if((parseInt(value[0], 10) * parseInt(value[2], 10)) == (parseInt(questions[i].value, 10))) {
                questions[i].style.backgroundColor = "rgb(190, 255, 190)";
                score++;
            } else {
                questions[i].style.backgroundColor = "rgb(245, 110, 110)";
            }
        }

        if(value[1] == "x=") {
            if((parseFloat(value[2], 10) / parseFloat(value[0], 10)) == (parseFloat(questions[i].value, 10))) {
                questions[i].style.backgroundColor = "rgb(190, 255, 190)";
                score+= 1;
            } else {
                questions[i].style.backgroundColor = "rgb(245, 110, 110)";
            }
        }
    }
    scoreText = document.querySelector(".score");
    scoreText.innerHTML = score + " / " + questions.length + " rätt!" + " ";
});