/**
 * Created by Amy on 25/04/2017.
 */

/*show quiz page on screen*/
function displayScreen() {

    /*if quiz is done, display score*/
    if (quiz.finished()) {
        displayScoreScreen();
    }

    /*else, move to next question*/
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionNumber().question ;

        var choices = quiz.getQuestionNumber().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            correct("button" + i, choices[i]);
        }
        progress();
    }
}

/*progress*/
function progress() {
    var currentQuestionNumber = quiz.questionNumber + 1;
    var element = document.getElementById("progress");
    element.innerHTML = currentQuestionNumber + " of " + quiz.questions.length;

}

/*move to next question, add score if correct answer*/
function correct(id, answer) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.correct(answer);
        displayScreen();
    }
}

/*display score when all questions are attempted*/
function displayScoreScreen() {
    var finish = "<h1>Result</h1>";
    finish += "<h2 id='score' style='color: lavenderblush'> Score: " +quiz.score+ "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML=finish;
 }

var questions = [
    new Question("Which city is the capital of Ireland?", ["Dublin", "Cork", "Galway", "Kerry"], "Dublin"),
    new Question("Which city is the capital of China?", ["Chengdu", "Qingdao", "Beijing", "Shanghai"], "Beijing"),
];

var quiz = new Quiz(questions);

displayScreen();