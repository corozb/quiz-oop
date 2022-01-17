export class UI {
  constructor() {}

  /**
   * @param {string} text question to render
   */
  showQuestion(text) {
    const questionTitle = document.getElementById('question')
    questionTitle.innerText = text
  }

  /**
   *
   * @param {string[]} choices the choice of question
   */
  showChoices(choices, callback) {
    const choicesContainer = document.getElementById('choices')
    choicesContainer.innerHTML = ''

    for (let choice of choices) {
      const button = document.createElement('button')
      button.innerHTML = choice
      button.classList = 'button'
      button.addEventListener('click', () => callback(choice))

      choicesContainer.appendChild(button)
    }
  }

  /**
   *
   * @param {number} score the total score
   */
  showScore(score) {
    const scoreHTML = `
    <h1>Resultado</h1>
    <h2>Tu resultado es: ${score}</h2>
    `

    const quizElement = document.getElementById('quiz')
    quizElement.innerHTML = scoreHTML
  }

  /**
   * @param {number} currentIndex current question
   * @param {current} total total questions
   */

  showProgress(currentIndex, total) {
    const progressQuestion = `
    <p>Pregunta ${currentIndex} de ${total}</p>
    `

    const progress = document.getElementById('progress')
    progress.innerHTML = progressQuestion
  }
}
