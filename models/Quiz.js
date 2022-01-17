// @ts-check
import { Question } from './Question.js'

export class Quiz {
  questionIndex = 0
  score = 0

  /**
   *
   * @param {Question[]} questions
   */
  constructor(questions) {
    this.questions = questions
  }

  /**
   *
   * @returns {Question} the question found
   */
  getQuestionsIndex() {
    return this.questions[this.questionIndex]
  }

  isEnded() {
    return this.questions.length === this.questionIndex
  }

  guessAnswer(answer) {
    console.log(answer)
    if (this.getQuestionsIndex().correctAnswer(answer)) {
      this.score++
    }
    this.questionIndex++
  }
}
