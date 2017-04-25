/**
 * Created by Amy on 25/04/2017.
 */

/*create a question*/
function Question(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;

}

/*check answer*/
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer;
}