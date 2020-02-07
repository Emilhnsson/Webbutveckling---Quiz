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
    svar = document.querySelector(".svar");

    if(score < 4) {
        svar.style.backgroundColor = "rgba(220,20,60, 0.800)";
    } else if(score >= 4 && score <= 6) {
        svar.style.backgroundColor = "rgba(207, 207, 72, 0.800)";
    } else {
        svar.style.backgroundColor = "rgba(152, 219, 152, 0.800)";
    }

    svar.style.display = "flex";
    svar.style.animation = "fade .5s ease-in-out";
    svar.style.opacity = "1";
});

var close = document.querySelector("#close");

close.addEventListener('click', function() {
    svar.style.display = "none";
});