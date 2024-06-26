//selecting all required elements
// const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
var element = document.getElementById("stbtn"); 
let receivedValue = getCookie("choice");

// let questions = htmlquestions;
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
info_box.classList.add("activeInfo");
// start_btn.onclick = () => {
//     element.remove();

// }
exit_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    // element.classList.remove("start_btn");
    window.location.href = "../categories/";

}

// if continueQuiz button clicked
continue_btn.onclick = () => {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
    queCounter(1);
    startTimer(30);
    startTimerLine(0);
}

let timeValue = 30;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    timeValue = 30;
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    // clearInterval(counterLine);
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}

quit_quiz.onclick = () => {
    window.location.href = "../categories/";
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

function getCookie(cookieName) {
    const cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();

        if (cookie.startsWith(cookieName + '=')) {
            return cookie.substring(cookieName.length + 1);
        }
    }
    return null;
}



if (receivedValue == 1) {
    questions = htmlquestions;
    document.getElementById("title").innerHTML = "HTML QUIZ"; 
}
else if (receivedValue == 2) {
    questions = cssquestions;
    document.getElementById("title").innerHTML = "CSS Quiz"
} else if (receivedValue == 3) {
    questions = jsquestions;
    document.getElementById("title").innerHTML = "JS Quiz"

} else if (receivedValue == 4) {
    questions = cquestions;
    document.getElementById("title").innerHTML = "C Quiz"

}
else if (receivedValue == 5) {

    questions = javaquestions;
    document.getElementById("title").innerHTML = "Java Quiz"
}
else if (receivedValue == 6) {

    questions = pythonQuestions;
    document.getElementById("title").innerHTML = "Python Quiz"
}
else if (receivedValue == 7) {

    questions = cppQuestions;
    document.getElementById("title").innerHTML = "C++ Quiz"
}
else if (receivedValue == 8) {

    questions = phpQuestions;
    document.getElementById("title").innerHTML = "PHP Quiz"
}
else if (receivedValue == 9) {

    questions = sqlQuestions;
    document.getElementById("title").innerHTML = "SQL Quiz"
}
else {
    questions = javaquestions;
    document.getElementById("title").innerHTML = "Java Quiz"

}
// if Next Que button clicked
next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb);
        clearInterval(counter);
        // clearInterval(counterLine); 
        startTimer(timeValue);
        // startTimerLine(widthValue); 
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    } else {
        clearInterval(counter);
        // clearInterval(counterLine); 
        showResult();
    }
}

// getting questions and options from array
function showQuetions(index) {
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>' + questions[index].numb + ". " + questions[index].question + '</span>';
    let option_tag =
        '<div class="option"><span>' + questions[index].options[0] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[1] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[2] + '</span></div>' +
        '<div class="option"><span>' + questions[index].options[3] + '</span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for (i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
    clearInterval(counter);
    // clearInterval(counterLine); 
    let userAns = answer.textContent;
    let correcAns = questions[que_count].answer;
    const allOptions = option_list.children.length;

    if (userAns == correcAns) {
        userScore += 1;
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option

    } else {
        answer.classList.add("incorrect");
        answer.insertAdjacentHTML("beforeend", crossIconTag);
        console.log("Wrong Answer");

        for (i = 0; i < allOptions; i++) {
            if (option_list.children[i].textContent == correcAns) {
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    for (i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult() {
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 10) {
    }
    let scoreTag = '<span>and You got<p>' + userScore + '</p> out of <p>' + questions.length + '</p></span>'
    scoreText.innerHTML = scoreTag;
}

function startTimer(time) {
    counter = setInterval(timer, 1000);

    function timer() {
        timeCount.textContent = time;
        time--;
        if (time < 9) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if (time < 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
            const allOptions = option_list.children.length;
            let correcAns = questions[que_count].answer;
            for (i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent == correcAns) {
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for (i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.classList.add("show");
        }
    }
}

// function startTimerLine(time) {
//     counterLine = setInterval(timer, 29);

//     function timer() {
//         time += 1; //upgrading time value with 1
//         time_line.style.width = time + ""; //increasing width of time_line with px by time value
//         if (time > 549) { //if time value is greater than 549
//             clearInterval(counterLine); //clear counterLine
//         }
//     }
// }

function queCounter(index) {
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span><p>' + index + '</p> of <p>' + questions.length + '</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag; //adding new span tag inside bottom_ques_counter
}


// code for window

// var isActive = true;

// function handleVisibilityChange() {
//     if (document.hidden) {
//         // User switched tabs, take action here
//         isActive = false;
//         alert("Please focus on this tab!");
//     } else {
//         // User returned to the tab
//         isActive = true;
//     }
// }

// document.addEventListener("visibilitychange", handleVisibilityChange, false);

// // Example: Disabling right-click context menu to deter users from opening new tabs
// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
// });

// // Example: Alert user if they try to leave the page
// window.addEventListener("beforeunload", function (e) {
//     if (!isActive) {
//         var confirmationMessage = "Are you sure you want to leave?"; // Custom message
//         (e || window.event).returnValue = confirmationMessage;
//         return confirmationMessage;
//     }
// });
