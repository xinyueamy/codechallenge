/**
 * Created by Amy on 25/04/2017.
 */

/*create new quiz*/
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionNumber = 0;
}

/*see which question the user is doing*/
Quiz.prototype.getQuestionNumber = function () {
    return this.questions[this.questionNumber];
}

/*check if user finishes all questions*/
Quiz.prototype.finished = function () {
    return this.questions.length === this.questionNumber;
}

/*check if the answer is correct*/
Quiz.prototype.correct = function (answer) {
    if (this.getQuestionNumber().correctAnswer(answer)) {
        this.score++;
    }
    this.questionNumber++;
}