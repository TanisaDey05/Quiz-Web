const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Berlin', correct: false },
        { text: 'Madrid', correct: false },
        { text: 'Paris', correct: true },
        { text: 'Lisbon', correct: false }
      ]
    },
    {
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { text: 'Earth', correct: false },
        { text: 'Venus', correct: false },
        { text: 'Mars', correct: true },
        { text: 'Jupiter', correct: false }
      ]
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answers: [
        { text: 'William Shakespeare', correct: true },
        { text: 'Charles Dickens', correct: false },
        { text: 'Jane Austen', correct: false },
        { text: 'Mark Twain', correct: false }
      ]
    },
    {
      question: 'Which is the largest ocean on Earth?',
      answers: [
        { text: 'Atlantic Ocean', correct: false },
        { text: 'Indian Ocean', correct: false },
        { text: 'Arctic Ocean', correct: false },
        { text: 'Pacific Ocean', correct: true }
      ]
    },
    {
      question: 'What is the square root of 64?',
      answers: [
        { text: '6', correct: false },
        { text: '7', correct: false },
        { text: '8', correct: true },
        { text: '9', correct: false }
      ]
    },
    {
      question: 'What gas do plants absorb from the atmosphere?',
      answers: [
        { text: 'Oxygen', correct: false },
        { text: 'Nitrogen', correct: false },
        { text: 'Carbon Dioxide', correct: true },
        { text: 'Hydrogen', correct: false }
      ]
    },
    {
      question: 'Which language is primarily used for Android app development?',
      answers: [
        { text: 'Java', correct: true },
        { text: 'Swift', correct: false },
        { text: 'Python', correct: false },
        { text: 'C#', correct: false }
      ]
    },
    {
      question: 'How many continents are there?',
      answers: [
        { text: '5', correct: false },
        { text: '6', correct: false },
        { text: '7', correct: true },
        { text: '8', correct: false }
      ]
    },
    {
      question: 'What does HTML stand for?',
      answers: [
        { text: 'HyperText Markup Language', correct: true },
        { text: 'HighText Machine Language', correct: false },
        { text: 'Hyperlink and Text Markup Language', correct: false },
        { text: 'Home Tool Markup Language', correct: false }
      ]
    },
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Vincent Van Gogh', correct: false },
        { text: 'Leonardo da Vinci', correct: true },
        { text: 'Pablo Picasso', correct: false },
        { text: 'Claude Monet', correct: false }
      ]
    }
  ]
  